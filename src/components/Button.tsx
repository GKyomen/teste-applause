import React from 'react';
import { TouchableOpacity, Text, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { colors } from '@/styles/colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Button({ text, onPress, disabled = false, containerStyle }: ButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.container, 
        disabled && styles.disabled,
        containerStyle,
      ]}
      disabled={disabled}
    >
      <Text style={[
        styles.text, 
        disabled && styles.disabledText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  disabled: {
    backgroundColor: colors.quaternary,
  },
  text: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: colors.primary,
  },
  disabledText: {
    opacity: 0.5,
  },
});
