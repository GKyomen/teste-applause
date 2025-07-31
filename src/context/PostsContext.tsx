import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Post } from '../mocks/posts';
import { fetchPosts } from '../api';

interface PostsContextType {
  posts: Post[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  hasMore: boolean;
  currentPage: number;
  refreshPosts: () => Promise<void>;
  loadMorePosts: () => Promise<void>;
  addNewPosts: (newPosts: Post[]) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const loadInitialPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchPosts(1, 5);
      setPosts(response.data);
      setCurrentPage(response.page);
      setHasMore(response.hasMore);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar posts');
    } finally {
      setLoading(false);
    }
  };

  const refreshPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchPosts(1, 5);
      setPosts(response.data);
      setCurrentPage(response.page);
      setHasMore(response.hasMore);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar posts');
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      setError(null);
      const nextPage = currentPage + 1;
      const response = await fetchPosts(nextPage, 5);
      
      setPosts(prevPosts => [...prevPosts, ...response.data]);
      setCurrentPage(response.page);
      setHasMore(response.hasMore);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar mais posts');
    } finally {
      setLoadingMore(false);
    }
  };

  const addNewPosts = (newPosts: Post[]) => {
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    refreshPosts();
  };

  useEffect(() => {
    loadInitialPosts();
  }, []);

  return (
    <PostsContext.Provider value={{
      posts,
      loading,
      loadingMore,
      error,
      hasMore,
      currentPage,
      refreshPosts,
      loadMorePosts,
      addNewPosts,
    }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = (): PostsContextType => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};
