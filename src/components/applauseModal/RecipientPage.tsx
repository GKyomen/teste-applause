import { useCallback, memo } from 'react';
import { View, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { colors } from '@/styles/colors';
import { Recipient } from '@/mocks';
import ModalHeader from './ModalHeader';
import RecipientItem from './RecipientItem';

interface RecipientPageProps {
  onSave: () => void;
  onCancel: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredRecipients: any[];
  selectedRecipients: number[];
  onToggleRecipient: (id: number) => void;
  isLoading: boolean;
}

const RecipientPage = memo(({
  onSave,
  onCancel,
  searchQuery,
  onSearchChange,
  filteredRecipients,
  selectedRecipients,
  onToggleRecipient,
  isLoading,
}: RecipientPageProps) => {
  const renderRecipientItem = useCallback(({ item }: { item: Recipient }) => (
    <RecipientItem
      recipient={item}
      isSelected={selectedRecipients.includes(item.id)}
      onToggle={onToggleRecipient}
    />
  ), [selectedRecipients, onToggleRecipient]);

  return (
    <View style={styles.contentContainer}>
      <ModalHeader 
        title="Para quem?" 
        rightButtonText="Selecionar" 
        onRightPress={onSave}
        onCancel={onCancel}
      />
      
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        placeholderTextColor={colors.gray}
        value={searchQuery}
        onChangeText={onSearchChange}
      />
      
      <FlatList
        data={filteredRecipients}
        keyExtractor={(item: Recipient) => item.id.toString()}
        renderItem={renderRecipientItem}
        ListEmptyComponent={
          <View style={styles.loadingContainer}>
            {isLoading && <ActivityIndicator size="large" color={colors.primary} />}
          </View>
        }
        style={styles.recipientsList}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        })}
      />
    </View>
  );
});

RecipientPage.displayName = 'RecipientPage';
export default RecipientPage;

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.quaternary,
    paddingVertical: 8,
    paddingHorizontal: 0,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: colors.primary,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  recipientsList: {
    maxHeight: 250,
    flexGrow: 0,
  },
});