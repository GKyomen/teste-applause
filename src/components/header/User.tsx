import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

import { colors } from '@/styles/colors';
import Avatar from '../Avatar';

interface UserProps {
  avatar?: string;
  score?: number;
  loading?: boolean;
  onPress: () => void;
}

export default function User({ avatar, score, loading = false, onPress }: UserProps) {
  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
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
  }, [loading, shimmerValue]);

  const shimmerStyle = {
    opacity: shimmerValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.8],
    }),
  };

  const isDisabled = loading || !avatar || score === undefined;

  return (
    <TouchableOpacity 
      onPress={isDisabled ? undefined : onPress} 
      style={[styles.container, isDisabled && styles.disabled]} 
      disabled={isDisabled}
    >
      {loading ? (
        <Animated.View style={[styles.avatarSkeleton, shimmerStyle]} />
      ) : (
        <Avatar source={{ uri: avatar }} size={40} />
      )}
      
      <View>
        {loading ? (
          <>
            <Animated.View style={[styles.scoreTextSkeleton, shimmerStyle]} />
            <Text style={styles.walletText}>ver carteira</Text>
          </>
        ) : (
          <>
            <Text style={styles.scoreText}>{score} pontos</Text>
            <Text style={styles.walletText}>ver carteira</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 12,
  },
  disabled: {
    opacity: 0.7,
  },
  avatarSkeleton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.quaternary,
  },
  scoreText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  scoreTextSkeleton: {
    height: 16,
    width: 80,
    backgroundColor: colors.quaternary,
    borderRadius: 8,
    marginBottom: 5,
  },
  walletText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.white,
  },
});
