import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { colors } from '@/styles/colors';
import Button from './Button';

interface ClaimExperienceBannerProps {
  onClaimPress: () => void;
}

export default function ClaimExperienceBanner({ onClaimPress }: ClaimExperienceBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Você recebeu um <Text style={styles.boldText}>reconhecimento</Text> e conquistou uma <Text style={styles.boldText}>experiência</Text>!
        </Text>
        
        <View style={styles.bottomContainer}>
          <Button 
            text="Resgatar"
            onPress={onClaimPress}
          />
        </View>
      </View>
      
      <Image 
        source={require('../../assets/images/hands.png')} 
        style={styles.handsImage}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    paddingVertical: 16,
    gap: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: colors.white,
    marginBottom: 12,
  },
  boldText: {
    fontFamily: 'Poppins_600SemiBold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  handsImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 98,
    width: 165,
  },
});
