import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTasks = ({submitHandler, setTask, task}) => {
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="new task..."
        placeholderTextColor="darkgrey"
        onChangeText={setTask}
        value={task}
      />
      <Button 
        onPress={submitHandler}
        title="Add new task"
        color="orange"
      />
    </View>
  );
};

export default AddTasks;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontSize: 15
    }
});