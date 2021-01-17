import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function TodoAdd(props) {
  const [todo, setTodo] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputArea}
        placeholder={'Type something to do...'}
        onChangeText={(val) => setTodo(val)}
        testID = "input"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => todo !== "" && props.addTodo(todo)}
        testID = "button">
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoAdd;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'gray',
    marginHorizontal: 15,
    borderRadius: 3,
  },
  inputArea: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  addButton: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  addButtonText: {
    flex: 1,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
