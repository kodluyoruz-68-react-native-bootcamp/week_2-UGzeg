import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    setTodos([...todos, {id: id, isDone: false, text: item}]);
    setId(id + 1);
  }

  function todoPress(id) {
    const newTodos = todos;
    newTodos.map((item) => {
      item.isDone = item.id === id ? !item.isDone : item.isDone;
    });
    setTodos([...newTodos]);
  }

  function todoLongPress(id) {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos([...newTodos]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>TODO</Text>
        <Text style={styles.counter}>
          {todos.length > 0 ? todos.length : 0}
        </Text>
      </View>
      <View style={styles.todoListContainer}>
        <TodoList
          data={todos}
          todoPress={todoPress}
          todoLongPress={todoLongPress}
        />
      </View>
      <TodoAdd addTodo={addTodo} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: 'red',
  },
  counter: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  todoListContainer: {
    flex: 12,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
