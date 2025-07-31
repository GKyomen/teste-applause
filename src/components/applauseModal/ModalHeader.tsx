import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/styles/colors';

interface ModalHeaderProps {
  title: string;
  rightButtonText: string;
  onRightPress: () => void;
  onCancel: () => void;
}

const ModalHeader = memo(({ 
  title, 
  rightButtonText, 
  onRightPress, 
  onCancel 
}: ModalHeaderProps) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onCancel}>
      <Text style={styles.headerButton}>Cancelar</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity onPress={onRightPress}>
      <Text style={styles.headerButton}>{rightButtonText}</Text>
    </TouchableOpacity>
  </View>
));

ModalHeader.displayName = 'ModalHeader';
export default ModalHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  headerButton: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.primary,
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
    flex: 1,
  },
});
