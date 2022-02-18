import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { useSelector } from 'react-redux';
import { storeTypes } from '../redux/store';

export default function TabTwoScreen() {
  const treeState = useSelector((state: storeTypes) => state.treeReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ treeState.Name }</Text>
      <Text style={styles.title}>{ treeState.height }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
