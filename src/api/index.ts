import { User, mockUser } from '../mocks/user';
import { Post, mockPosts } from '../mocks/posts';

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  hasMore: boolean;
}

export const fetchUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 1000);
  });
};

export const fetchPosts = (page: number = 1, limit: number = 5): Promise<PaginatedResponse<Post>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      const data = mockPosts.slice(startIndex, endIndex);
      const totalPages = Math.ceil(mockPosts.length / limit);
      const hasMore = page < totalPages;

      resolve({
        data,
        page,
        totalPages,
        hasMore
      });
    }, 1000);
  });
};
