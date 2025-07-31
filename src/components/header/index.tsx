import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from '../Avatar';
import User from './User';
import NotificationBtn from './NotificationBtn';

interface HeaderProps {
  userAvatar?: string;
  userScore?: number;
  userLoading?: boolean;
  onUserPress: () => void;
  onNotificationPress: () => void;
}

export default function Header({ 
  userAvatar, 
  userScore, 
  userLoading = false,
  onUserPress, 
  onNotificationPress 
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar 
        source={require('../../../assets/images/company.png')} 
        size={48} 
      />
      
      <View style={styles.rightContainer}>
        <User 
          avatar={userAvatar}
          score={userScore}
          loading={userLoading}
          onPress={onUserPress}
        />
        <NotificationBtn onPress={onNotificationPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
