import * as React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <>
      <View>
<FlatList 
data={chatRoomsData} 
renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
showsVerticalScrollIndicator={false}
/>

      </View>
    </>
    </View>
  );
}

const styles = StyleSheet.create({
page:{

}
});
