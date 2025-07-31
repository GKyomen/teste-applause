import { useState, useCallback, useEffect } from 'react';
import { fetchRecipients, createPosts } from '@/api';
import { Recipient } from '@/mocks';
import { usePosts } from '@/context';

type ModalPage = 'main' | 'recipient' | 'message';

export const useApplauseModal = (onClose: () => void) => {
  const { addNewPosts } = usePosts();
  const [currentPage, setCurrentPage] = useState<ModalPage>('main');
  
  const [message, setMessage] = useState('');
  const [draftMessage, setDraftMessage] = useState('');
  
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [filteredRecipients, setFilteredRecipients] = useState<Recipient[]>([]);
  const [selectedRecipients, setSelectedRecipients] = useState<number[]>([]);
  const [draftSelectedRecipients, setDraftSelectedRecipients] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoadingRecipients, setIsLoadingRecipients] = useState(false);
  
  const [isCreatingPosts, setIsCreatingPosts] = useState(false);

  const loadRecipients = useCallback(async () => {
    setIsLoadingRecipients(true);
    try {
      const recipientsData = await fetchRecipients();
      setRecipients(recipientsData);
      setFilteredRecipients(recipientsData);
    } catch (error) {
      console.error('Error loading recipients:', error);
    } finally {
      setIsLoadingRecipients(false);
    }
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredRecipients(recipients);
    } else {
      const filtered = recipients.filter(recipient =>
        recipient.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      setFilteredRecipients(filtered);
    }
  }, [searchQuery, recipients]);

  const handleClose = useCallback(() => {
    setCurrentPage('main');
    setMessage('');
    setDraftMessage('');
    setSelectedRecipients([]);
    setDraftSelectedRecipients([]);
    setSearchQuery('');
    setIsCreatingPosts(false);
    onClose();
  }, [onClose]);

  const handleBackToMain = useCallback(() => {
    setCurrentPage('main');
  }, []);

  const handleRecipientNavigation = useCallback(() => {
    setDraftSelectedRecipients([...selectedRecipients]);
    setSearchQuery('');
    if (recipients.length === 0) {
      loadRecipients();
    }
    setCurrentPage('recipient');
  }, [selectedRecipients, loadRecipients, recipients.length]);

  const handleMessageNavigation = useCallback(() => {
    setDraftMessage(message);
    setCurrentPage('message');
  }, [message]);

  const handleSaveRecipients = useCallback(() => {
    setSelectedRecipients([...draftSelectedRecipients]);
    setCurrentPage('main');
  }, [draftSelectedRecipients]);

  const handleSaveMessage = useCallback(() => {
    setMessage(draftMessage);
    setCurrentPage('main');
  }, [draftMessage]);

  const toggleRecipientSelection = useCallback((recipientId: number) => {
    setDraftSelectedRecipients(prev => 
      prev.includes(recipientId)
        ? prev.filter(id => id !== recipientId)
        : [...prev, recipientId]
    );
  }, []);

  const handleComplete = useCallback(async () => {
    if (selectedRecipients.length === 0 || !message.trim()) return;
    setIsCreatingPosts(true);
    try {
      const selectedRecipientsData = recipients.filter(r => selectedRecipients.includes(r.id));
      const newPosts = await createPosts(selectedRecipientsData, message);
      addNewPosts(newPosts);
      handleClose();
    } catch (error) {
      console.error('Error creating posts:', error);
    } finally {
      setIsCreatingPosts(false);
    }
  }, [selectedRecipients, message, recipients, handleClose, addNewPosts]);

  const isCompleteDisabled = selectedRecipients.length === 0 || !message.trim() || isCreatingPosts;

  return {
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
  };
};
