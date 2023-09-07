import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Counter = ({completedItems, nonCompletedItems}) => {
  return (
    <View style={styles.counter}> 
        <View>
            <Text style={styles.box}> {completedItems.length} </Text>
            <Text> Done </Text>
        </View>
        <View>
            <Text style={styles.box}> {nonCompletedItems.length} </Text>
            <Text> in Progress </Text>
        </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
    counter: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    box: {
        padding: 10,
        backgroundColor: "orange",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
});