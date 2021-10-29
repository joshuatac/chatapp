import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    badgeContainer:{
      backgroundColor:'#590a5b',
      width:20,
      height:20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      top:10,
      borderWidth:1,
      borderColor:'white'
    },
    badgeText:{
      color:'white',
      fontSize:12,
    },
    image: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    name: {
      fontWeight: "bold",
      fontSize: 18,
      marginBottom:3
    },
    container: {
      flexDirection: "row",
      padding: 10,
    },
    text: {
      color: "grey"
    },
    rightContainer: {
      flex:1,
      justifyContent:'center',
    }
  });
  

  export default styles;