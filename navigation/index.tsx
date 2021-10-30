/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, Image, View, StyleSheet, useWindowDimensions } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} 
       options={{headerTitle: HomeHeader}}
       />
      <Stack.Screen name="ChatRoom" 
      component={ChatRoomScreen}
      options={{headerTitle: ChatRoomHeader, 
      }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) =>  {
  const {width} = useWindowDimensions();
  return(
    <View style={{
      flexDirection: 'row',
     justifyContent:'space-between',
      width:'95%',
      padding:10,
      alignItems:'center'
      }}>
      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
      style={{width:30, height:30, borderRadius:30}} />
          <Text style={{flex:1, color:'#590a5b', fontWeight:'bold', textAlign:'center', fontSize:18, marginLeft:50}}>Home</Text>
          <Feather name="camera" size={24} color="#590a5b" style={{marginHorizontal:5}} />
          <Feather name="edit-2" size={24} color="#590a5b" style={{marginHorizontal:5}}/>
    </View>

  )
}




const ChatRoomHeader = (props) =>  {
  const {width} = useWindowDimensions();
  return(
    <View style={{
      flexDirection: 'row',
     justifyContent:'space-between',
      width:width - 80,
      padding:10,
      marginRight:50,
      alignItems:'flex-start'
      }}>
      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
      style={{width:30, height:30, borderRadius:30}} />
          <Text style={{flex:1, color:'#590a5b', fontWeight:'bold', textAlign:'center', fontSize:16, marginLeft:10}}>{props.children}</Text>
          <Feather name="camera" size={24} color="#590a5b" style={{marginHorizontal:5}} />
          <Feather name="edit-2" size={24} color="#590a5b" style={{marginHorizontal:5}}/>
    </View>

  )
}