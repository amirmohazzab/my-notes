import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Task Management </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 40,
        backgroundColor: "orangered"
    }, 
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    }
});