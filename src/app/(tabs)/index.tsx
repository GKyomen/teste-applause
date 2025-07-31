import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';

import Header from "@/components/header";
import { colors } from "@/styles/colors";
import ClaimExperienceBanner from '@/components/ClaimExperienceBanner';
import Post, { PostSkeleton } from "@/components/post";
import FAB from '@/components/FAB';
import ApplauseModal from '@/components/applauseModal';
import { useUser, usePosts } from "@/context";
import { Post as PostType } from "@/mocks/posts";

export default function Home() {
  const insets = useSafeAreaInsets();
  const { user, loading: userLoading, claimExperience } = useUser();
  const { posts, loading, loadingMore, refreshPosts, loadMorePosts } = usePosts();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderPost = ({ item }: { item: PostType }) => (
    <Post 
      post={item}
      applauseCount={Math.floor(Math.random() * 20) + 1}
      commentCount={Math.floor(Math.random() * 10) + 1}
    />
  );

  const renderFooter = () => {
    if (loadingMore) return <PostSkeleton />;
    return null;
  };

  const renderSkeleton = () => (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );

  
  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }]}>
      <StatusBar style="light" />
      <View style={[styles.statusBarBackground, { height: insets.top }]} />
    
      <View style={styles.topSection}>
        <Header
          userAvatar={user?.avatar}
          userScore={user?.score}
          userLoading={userLoading}
          onUserPress={() => router.push('/experiences')}
          onNotificationPress={() => router.push('/menu')}
        />
        {user?.canClaimExperience && (
          <ClaimExperienceBanner
            onClaimPress={() => {
              claimExperience();
              router.push('/experiences');
            }}
          />
        )}
      </View>
      
      <View style={styles.listBackgroundContainer}>
        <View style={styles.topBackground} />
        <View style={styles.bottomBackground} />
        
        <FlatList
          style={styles.contentList}
          contentContainerStyle={styles.contentListContainer}
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={renderSkeleton}
          ListFooterComponent={renderFooter}
          refreshing={loading && posts.length > 0}
          onRefresh={refreshPosts}
        />
      </View>

      <View style={styles.fabContainer}>
        <FAB onPress={() => setIsModalVisible(true)} />
      </View>

      <ApplauseModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    zIndex: 1,
  },
  topSection: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 20,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: colors.primary,
  },
  listBackgroundContainer: {
    flex: 1,
    position: 'relative',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: colors.primary,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: colors.quaternary,
  },
  contentList: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  contentListContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  loadingMore: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
});
