import React, {useState} from 'react'
import { FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import Counter from './components/Counter';

const App = () => {

  const [tasks, setTasks] = useState([]);

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
  };

  const submitHandler = () => {
    if (task.length>3) {
      setTasks((prevTasks) => [
        ...prevTasks, 
      {
        name: task,
        key: Math.floor(Math.random()*1000).toString(),
        completed: false
      }
      ]);
      setTask("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Attention", "Characters must not less than 3", [
        {text: "Ok", onPress: () => {console.log("Alert closed")}}
      ])
    }
  };


  const completedItems = tasks.filter((p) => p.completed == true);
  const nonCompletedItems = tasks.filter((p) => p.completed == false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
       <View style={styles.container}>
       <Header />
       <View style={styles.body}>
        <AddTasks 
          submitHandler={submitHandler}
          setTask={setTask}
          task={task}
        />
        <Counter 
          completedItems={completedItems}
          nonCompletedItems={nonCompletedItems}
        />
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
