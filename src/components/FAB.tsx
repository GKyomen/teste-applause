import React, { useRef } from 'react';
import { StyleSheet, Animated, Pressable } from 'react-native';
import { ApplauseIcon } from '@/components/icons';
import { colors } from '@/styles/colors';

interface FABProps {
  onPress?: () => void;
}

export default function FAB({ onPress }: FABProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    onPress?.();
  };

  return (
    <Pressable
      style={styles.fab}
      onPress={handlePress}
    >
      <Animated.View style={[styles.fabContent, { transform: [{ scale: scaleAnim }] }]}>
        <ApplauseIcon size={32} isActive={true} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 24,
    backgroundColor: colors.secondary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
