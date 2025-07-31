import { useRef, useEffect } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
import { colors } from '@/styles/colors';
import { useApplauseModal } from './useApplauseModal';
import MainPage from './MainPage';
import RecipientPage from './RecipientPage';
import MessagePage from './MessagePage';

const { width: screenWidth } = Dimensions.get('window');

interface ApplauseModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ApplauseModal({ visible, onClose }: ApplauseModalProps) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  
  const {
    currentPage,
    message,
    draftMessage,
    recipients,
    filteredRecipients,
    selectedRecipients,
    draftSelectedRecipients,
    searchQuery,
    isLoadingRecipients,
    isCreatingPosts,
    isCompleteDisabled,
    handleClose,
    handleBackToMain,
    handleRecipientNavigation,
    handleMessageNavigation,
    handleSaveRecipients,
    handleSaveMessage,
    toggleRecipientSelection,
    handleComplete,
    setSearchQuery,
    setDraftMessage,
  } = useApplauseModal(onClose);

  useEffect(() => {
    const padding = 2 * 24;
    const modalWidth = screenWidth - padding;
    const targetValue = currentPage === 'main' ? 0 : -modalWidth;
    
    Animated.timing(slideAnim, {
      toValue: targetValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentPage, slideAnim]);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'recipient':
        return (
          <RecipientPage
            onSave={handleSaveRecipients}
            onCancel={handleBackToMain}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filteredRecipients={filteredRecipients}
            selectedRecipients={draftSelectedRecipients}
            onToggleRecipient={toggleRecipientSelection}
            isLoading={isLoadingRecipients}
          />
        );
      case 'message':
        return (
          <MessagePage
            onSave={handleSaveMessage}
            onCancel={handleBackToMain}
            message={draftMessage}
            onMessageChange={setDraftMessage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <View style={styles.animationWrapper}>
            <View style={styles.animationContainer}>
              <Animated.View 
                style={[
                  styles.pageContainer,
                  { transform: [{ translateX: slideAnim }] },
                ]}
              >
                <MainPage
                  onRecipientNavigation={handleRecipientNavigation}
                  onMessageNavigation={handleMessageNavigation}
                  onComplete={handleComplete}
                  selectedRecipients={selectedRecipients}
                  recipients={recipients}
                  message={message}
                  isCompleteDisabled={isCompleteDisabled}
                  isCreatingPosts={isCreatingPosts}
                />
              </Animated.View>
              
              <Animated.View 
                style={[
                  styles.pageContainer,
                  { transform: [{ translateX: slideAnim }] },
                ]}
              >
                {renderPageContent()}
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 100,
  },
  animationWrapper: {
    overflow: 'hidden',
  },
  animationContainer: {
    flexDirection: 'row',
    width: '200%',
  },
  pageContainer: {
    width: '50%',
    minWidth: '50%',
  },
});
