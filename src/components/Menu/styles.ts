import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: theme.colors.gray[800],
  },
  content: { flex: 1, padding: 24, alignItems: 'center' },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: theme.fontFamily.midium,
    fontSize: 18,
    color: theme.colors.white,
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
  },
  close: {},
});
