import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@/theme';

export function MenuButton({ title, icon }: MenuProps) {
  return (
    <Pressable style={styles.conteiner}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
