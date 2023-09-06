import React, {useState} from 'react'
import { FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState([
    {name: "work", key: "1", completed: false},
    {name: "free study", key: "2", completed: false},
    {name: "sport", key: "3", completed: false},
    {name: "cleaning", key: "4", completed: false},
    {name: "cooking", key: "5", completed: false}
  ]);

  const [task, setTask] = useState("");

  const pressHandler = (key) => {
    setTasks((prevTasks) => prevTasks.filter((p) => p.key != key));
  }

  const completedHandler = (key) => {
    const allTasks = [...tasks];
    const taskIndex = allTasks.findIndex((p) => p.key === key);
    const task = allTasks[taskIndex];
    task.completed = !task.completed;
    allTasks[taskIndex] = task;

    setTasks(allTasks);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
       <View style={styles.container}>
       <Header />
       <View style={styles.body}>
        <View style={styles.items}>
          <FlatList 
            data={tasks}
            renderItem={({item}) => (
              <Tasks 
                task={item}
                pressHandler={pressHandler}
                completedHandler={completedHandler}
              />
            )}
          />
        </View>
      </View>
     </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    padding: 40,
    backgroundColor: "pink",
    flex: 1,
  },
  items: {
    marginTop: 20,
    flex: 1
  }
});
