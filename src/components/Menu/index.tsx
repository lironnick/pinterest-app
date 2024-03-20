import { forwardRef } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { MenuButton } from '../MenuButton';
import { theme } from '@/theme';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={[100, 230]}
      enablePanDownToClose={true}
      backgroundStyle={styles.conteiner}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            style={styles.close}
            color={theme.colors.white}
          />
          <Text style={styles.title}>Opa </Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
