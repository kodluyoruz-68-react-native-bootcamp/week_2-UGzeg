import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TodoItem({item, todoPress, todoLongPress}) {
  const {text, isDone, id} = item;
  return (

    <View style = {isDone ? styles.doneContainer : styles.container}>
      <TouchableOpacity 
      style={isDone ? styles.doneTodo : styles.todo}
      onPress={() => todoPress(id)}
      onLongPress={()=> todoLongPress(id)}>
        <Text style={isDone ? styles.doneTodoText : styles.todoText}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  doneContainer: {
    marginVertical: 5,
    opacity: 0.25,
  },
  doneTodo: {
    backgroundColor: 'darkgreen',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  todo: {
    backgroundColor: 'maroon',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  doneTodoText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  todoText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
