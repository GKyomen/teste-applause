import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/styles/colors';
import { CheckboxIcon } from '../icons';
import Avatar from '../Avatar';
import { Recipient } from '@/mocks';

interface RecipientItemProps {
  recipient: Recipient;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

const RecipientItem = memo(({ recipient, isSelected, onToggle }: RecipientItemProps) => (
  <TouchableOpacity
    style={styles.recipientItem}
    onPress={() => onToggle(recipient.id)}
  >
    <View style={styles.recipientLeft}>
      <Avatar source={{ uri: recipient.avatar }} size={30} />
      <Text style={styles.recipientName}>{recipient.name}</Text>
    </View>
    <CheckboxIcon checked={isSelected} />
  </TouchableOpacity>
));

RecipientItem.displayName = 'RecipientItem';
export default RecipientItem;

const styles = StyleSheet.create({
  recipientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0,
    height: 50,
  },
  recipientLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recipientName: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: colors.primary,
  },
});
