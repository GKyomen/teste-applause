import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export default function Metas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas</Text>
      <Text style={styles.description}>Página não desenvolvida para o teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: colors.primary,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    color: colors.gray,
  }
});
