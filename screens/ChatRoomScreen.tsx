import React from "react";
import { useNavigation, useRoute } from '@react-navigation/core';
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from "../components/MessageInput";


export default function ChatRoomScreen(){
    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({title: 'Joshua Ayomide'})
    
    return(
        <SafeAreaView style={styles.page}>
          <FlatList 
          data={ChatRoomData.messages}
          renderItem={({item}) => <Message message={item} />}
          inverted
          style={{backgroundColor: '#ffffff'}}
          />
               <MessageInput />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
page:{
    backgroundColor:'white',
    flex:1
}
})
