import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Tasks = ({task, pressHandler, completedHandler}) => {
  return (
    <TouchableOpacity onPress={() => completedHandler(task.key)}>
      <View style={styles.task}>
        <MaterialIcons name="delete" size={30} color="coral" onPress={() => pressHandler(task.key)}/>
        <Text style={[styles.taskTitle, task.completed ? {textDecorationLine: "line-through"} : {}]}> {task.name} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  task: {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "orangered",
    borderRadius: 20,
    borderStyle: "dashed",
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  taskTitle: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  }
});