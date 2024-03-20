import {
  Pressable,
  PressableProps,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import { Post } from '@/components/Post';

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: 'right' | 'left') {
    // verificar qual lado vai ficar cada imagem
    const rest = column === 'left' ? 0 : 1;
    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn('left')}</View>
        <View style={styles.column}>{postsByColumn('right')}</View>
      </View>
    </ScrollView>
  );
}
