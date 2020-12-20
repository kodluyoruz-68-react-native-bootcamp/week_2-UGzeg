import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({data, todoPress, todoLongPress}) {
  const todoItem = ({item}) => {
    return (
      <TodoItem
        item={item}
        todoPress={(id) => todoPress(id)}
        todoLongPress={(id) => todoLongPress(id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id * Math.round(Math.random() * 10000) + ''}
      renderItem={todoItem}
      testID = "list"
    />
  );
}

export default TodoList;

const styles = StyleSheet.create({});
