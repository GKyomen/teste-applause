import { memo } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { colors } from '@/styles/colors';
import ModalHeader from './ModalHeader';

interface MessagePageProps {
  onSave: () => void;
  onCancel: () => void;
  message: string;
  onMessageChange: (message: string) => void;
}

const MessagePage = memo(({
  onSave,
  onCancel,
  message,
  onMessageChange,
}: MessagePageProps) => (
  <View style={styles.contentContainer}>
    <ModalHeader 
      title="Mensagem" 
      rightButtonText="Salvar" 
      onRightPress={onSave}
      onCancel={onCancel}
    />
    
    <TextInput
      style={styles.messageInput}
      multiline
      numberOfLines={6}
      placeholder="Digite a mensagem para enviar com o aplauso"
      placeholderTextColor={colors.gray}
      value={message}
      onChangeText={onMessageChange}
      textAlignVertical="top"
    />
  </View>
));

MessagePage.displayName = 'MessagePage';
export default MessagePage;

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: colors.primary,
    minHeight: 120,
    maxHeight: 200,
  },
});

