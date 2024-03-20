import { FlatList } from 'react-native';
import { styles } from './styles';

import { Filter } from '@/components/Filter';

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item == filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.list}
    />
  );
}
