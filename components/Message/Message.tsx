import React from "react";
import { View, Text, StyleSheet } from "react-native";

const purple = "#590a5b";
const grey = "lightgray";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container, isMe ? styles.leftContainer : styles.rightConatiner
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#590a5b",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    maxWidth: "75%",
    flex: 1,
  },

 leftContainer: {
backgroundColor: 'lightgray',
marginLeft:10,
marginRight:'auto'

 },
 rightConatiner:{
    backgroundColor: '#590a5b',
    marginLeft:'auto',
    marginRight:10
 }
});

export default Message;
