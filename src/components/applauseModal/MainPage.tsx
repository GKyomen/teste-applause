import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/styles/colors';
import { ChevronRightIcon } from '../icons';
import Button from '../Button';

interface MainPageProps {
  onRecipientNavigation: () => void;
  onMessageNavigation: () => void;
  onComplete: () => void;
  selectedRecipients: number[];
  recipients: any[];
  message: string;
  isCompleteDisabled: boolean;
  isCreatingPosts: boolean;
}

const MainPage = memo(({
  onRecipientNavigation,
  onMessageNavigation,
  onComplete,
  selectedRecipients,
  recipients,
  message,
  isCompleteDisabled,
  isCreatingPosts,
}: MainPageProps) => {
  const getRecipientPreview = () => {
    if (selectedRecipients.length === 0) return null;
    
    const selectedNames = recipients
      .filter(recipient => selectedRecipients.includes(recipient.id))
      .map(recipient => recipient.name);
    
    if (selectedNames.length === 0) return '';
    if (selectedNames.length === 1) return selectedNames[0];
    
    const firstName = selectedNames[0];
    const remaining = selectedNames.length - 1;
    return `${firstName} e +${remaining}`;
  };

  const recipientPreview = getRecipientPreview();

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Envie um Aplauso</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionItem, styles.optionItemTop]}
          onPress={onRecipientNavigation}
        >
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Para quem?</Text>
            {recipientPreview && (
              <Text style={styles.preview} numberOfLines={1}>
                {recipientPreview}
              </Text>
            )}
          </View>
          {selectedRecipients.length === 0 && (
            <ChevronRightIcon size={20} color={colors.primary} />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.optionItem, styles.optionItemBottom]}
          onPress={onMessageNavigation}
        >
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mensagem</Text>
            {message && (
              <Text style={styles.preview} numberOfLines={2}>
                {message}
              </Text>
            )}
          </View>
          {!message && <ChevronRightIcon size={20} color={colors.primary} />}
        </TouchableOpacity>
      </View>
      
      <Button
        text={isCreatingPosts ? "Enviando..." : "Completar"}
        onPress={onComplete}
        disabled={isCompleteDisabled}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
});

MainPage.displayName = 'MainPage';
export default MainPage;

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 4,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: colors.quaternary,
    borderRadius: 6,
    overflow: 'hidden',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.quaternary,
  },
  optionItemTop: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  optionItemBottom: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomWidth: 0,
  },
  optionText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: colors.primary,
  },
  optionTextContainer: {
    flex: 1,
  },
  preview: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: colors.gray,
    marginTop: 2,
  },
});