import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '@/styles/colors';
import Avatar from '../Avatar';

interface UserProps {
  avatar: string;
  score: number;
  onPress: () => void;
}

export default function User({ avatar, score, onPress }: UserProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar source={{ uri: avatar }} size={40} />
      <View>
        <Text style={styles.scoreText}>{score} pontos</Text>
        <Text style={styles.walletText}>ver carteira</Text>
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
  scoreText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  walletText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.white,
  },
});
