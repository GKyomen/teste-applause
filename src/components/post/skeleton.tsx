import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors } from '../../styles/colors';
import { ApplauseIcon, ChatIcon } from '../icons';

export const PostSkeleton = () => {
  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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
  }, [shimmerValue]);

  const shimmerStyle = {
    opacity: shimmerValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.8],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={[styles.avatar, shimmerStyle]} />
        <View style={styles.userInfo}>
          <Animated.View style={[styles.username, shimmerStyle]} />
          <Animated.View style={[styles.timestamp, shimmerStyle]} />
        </View>
      </View>

      <View>
        <Animated.View style={[styles.textLine, styles.textLineFull, shimmerStyle]} />
        <Animated.View style={[styles.textLine, styles.textLineMedium, shimmerStyle]} />
        <Animated.View style={[styles.textLine, styles.textLineShort, shimmerStyle]} />
      </View>

      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <ApplauseIcon size={32} isActive={false} />
          <Animated.View style={[styles.actionText, shimmerStyle]} />
        </View>
        <View style={styles.actionButton}>
          <ChatIcon size={32} />
          <Animated.View style={[styles.actionText, shimmerStyle]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.quaternary,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    height: 16,
    width: 120,
    backgroundColor: colors.quaternary,
    borderRadius: 8,
    marginBottom: 4,
  },
  timestamp: {
    height: 12,
    width: 80,
    backgroundColor: colors.quaternary,
    borderRadius: 6,
  },
  textLine: {
    height: 14,
    backgroundColor: colors.quaternary,
    borderRadius: 7,
    marginBottom: 8,
  },
  textLineFull: {
    width: '100%',
  },
  textLineMedium: {
    width: '75%',
  },
  textLineShort: {
    width: '50%',
    marginBottom: 0,
  },
  actions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    height: 14,
    width: 30,
    backgroundColor: colors.quaternary,
    borderRadius: 7,
  },
});
