import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Platform, KeyboardAvoidingView } from "react-native";
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";


export default function () {

const sendMessage = () => {
    console.warn("sending: ", message);
    setMessage('');
}

const onPlusClicked = () => {
    console.warn("n Plus Cliked");
}


const [message, setMessage] = useState('');
const onPress = () => {
    if (message) {
        sendMessage();
    } else {
        onPlusClicked();
    }
}

  return (
    <KeyboardAvoidingView
     style={styles.root}  
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     keyboardVerticalOffset={100}
     >
      <View style={styles.inputContainer}>
          <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon} />
   
    <TextInput 
    value={message}
    onChangeText={setMessage}
    style={styles.input} 
    placeholder="Input your message... "
    />
    
    <Feather name="camera" size={24} color="#595959" style={styles.icon} />
    <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
       {message ? <Ionicons name="send" size={18} color="#ffffff" /> : <AntDesign name="plus" size={24} color="white" />}
          </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
      flexDirection:'row',
      padding:10
  },
  inputContainer: {
      backgroundColor: '#f2f2f2',
      flex:1,
      marginRight:10,
      borderRadius: 25,
      borderWidth:1,
      borderColor:'#dedede',
      alignItems: 'center',
      flexDirection:'row',
      padding:5

  },
  buttonContainer: {
      width:40,
      height:40,
      backgroundColor:'#590a5b',
      borderRadius: 25,
      justifyContent:'center',
      alignItems: 'center'
  },
  buttonText:{
      color:'white',
      fontSize:35,
  },
  input: {
      flex:1,
      marginHorizontal:5
  },
  icon:{
      marginHorizontal:5
  }
});
