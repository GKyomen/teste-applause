import React, { useState, useRef, memo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Image } from 'expo-image';

import Avatar from '../Avatar';
import { ApplauseIcon, ChatIcon } from '../icons';
import { colors } from '@/styles/colors';
import { formatDate } from '@/utils/date';
import type { Post as PostType } from '@/mocks/posts';

export * from './skeleton';

interface PostProps {
  post: PostType;
  onApplausePress?: () => void;
  onCommentPress?: () => void;
  applauseCount: number;
  commentCount: number;
}

const Post = memo(({ 
  post, 
  onApplausePress, 
  onCommentPress, 
  applauseCount, 
  commentCount 
}: PostProps) => {
  const [isApplauseActive, setIsApplauseActive] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);
  
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isImageLoading && post.image) {
      const shimmerAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(shimmerValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      );
      shimmerAnimation.start();
      
      return () => shimmerAnimation.stop();
    }
  }, [isImageLoading, post.image]);

  const handleApplausePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 40/32,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    setIsApplauseActive(!isApplauseActive);
    onApplausePress?.();
  };

  const handleImageLoadStart = () => {
    setIsImageLoading(true);
    setHasImageError(false);
  };

  const handleImageLoadEnd = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
    setHasImageError(true);
  };

  const renderTextWithHashtags = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const isHashtag = word.startsWith('#') && word.length > 1;
      
      return (
        <Text 
          key={index}
          style={[
            styles.postText,
            isHashtag && styles.hashtag
          ]}
        >
          {word}{index < words.length - 1 ? ' ' : ''}
        </Text>
      );
    });
  };

  const shimmerStyle = {
    opacity: shimmerValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.8],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar source={{ uri: post.recipientAvatar }} size={36} />
        <View style={styles.headerText}>
          <Text style={styles.recipientText}>
            <Text style={styles.semiBold}>{post.recipientName}</Text> recebeu um{' '}
            <Text style={styles.semiBold}>{post.type}</Text>
          </Text>
          <Text style={styles.authorText}>
            de {post.authorName} - {formatDate(post.date)}
          </Text>
        </View>
      </View>

      <Text style={styles.postText}>
        {renderTextWithHashtags(post.text)}
      </Text>

      {post.image && (
        <>
          {hasImageError ? (
            <View>
              <Text style={styles.imageErrorText}>
                Erro ao carregar imagem. Tente novamente mais tarde
              </Text>
            </View>
          ) : (
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: post.image }}
                style={styles.postImage}
                contentFit="cover"
                onLoadStart={handleImageLoadStart}
                onLoadEnd={handleImageLoadEnd}
                onError={handleImageError}
              />
              
              {isImageLoading && (
                <Animated.View style={[styles.imageSkeleton, shimmerStyle]} />
              )}
            </View>
          )}
        </>
      )}

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleApplausePress}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <ApplauseIcon size={32} isActive={isApplauseActive} />
          </Animated.View>
          <Text style={styles.actionText}>{isApplauseActive ? applauseCount + 1 : applauseCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onCommentPress}>
          <ChatIcon size={32} />
          <Text style={styles.actionText}>{commentCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

Post.displayName = 'Post';
export default Post;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: {
    flex: 1,
  },
  recipientText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: colors.primary,
  },
  semiBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  authorText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
  postText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: colors.gray,
  },
  hashtag: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.tertiary,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: colors.quaternary,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12,
  },
  imageSkeleton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.quaternary,
    borderRadius: 12,
  },
  imageErrorText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.primary,
    textAlign: 'center',
    lineHeight: 18,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 13,
    color: colors.gray,
  },
});
