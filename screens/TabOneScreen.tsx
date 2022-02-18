import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useDispatch, useSelector } from 'react-redux';
import { storeTypes } from '../redux/store';
import { IrrigateAction, FertilizeAction, TrimAction, NextYearAction } from '../redux/actions/tree.action';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  /* 一次把整個reducer的資料拿出來 */
  const treeState = useSelector((state: storeTypes) => state.treeReducer);

  /* 只拿reducer中的Age */
  // const age = useSelector((state: storeTypes) => state.treeReducer.Age);

  const dispatch = useDispatch();

  const irrigateHandler = (ml: number) => {
    dispatch(IrrigateAction(ml));
  }

  const fertilizeHandler = (g: number) => {
    dispatch(FertilizeAction(g));
  }

  const trimHandler = (cm: number) => {
    dispatch(TrimAction(cm));
  }

  const nextYearHandler = () => {
    dispatch(NextYearAction());
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => irrigateHandler(150)}>
        <Text style={styles.title}>澆水150ml</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => fertilizeHandler(5)}>
        <Text style={styles.title}>施肥5g</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => trimHandler(3)}>
        <Text style={styles.title}>修剪3cm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => nextYearHandler()}>
        <Text style={styles.title}>過了一年</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.info}>
        <Text style={styles.title}>{"Name: " + treeState.Name}</Text>
        <Text style={styles.title}>{"Height: " + treeState.height}</Text>
        <Text style={styles.title}>{"Age: " + treeState.Age}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    marginVertical: 5,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  info: {
    backgroundColor: '#AAA',
    padding: 30,
    borderRadius: 10,
  }
});
