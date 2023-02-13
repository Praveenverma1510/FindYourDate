import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { androidDeviceFontFix } from './Routes';
// import Feather from 'react-native-vector-icons/Feather';
import { Keyboard, View, Text, StatusBar, StyleSheet, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Touchable, ScrollView, Dimensions, Pressable } from "react-native";
import { Colors } from '../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Images, Icons } from '../Assets/Images'
import { getFocusedRouteNameFromRoute, NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fonts } from '../Common/Fonts';
// import Main from '../Screen/Main';
import Match from '../Screen/Match';
// import Message from '../Screen/Message';
import AllMatch from '../Screen/AllMatch';
import PersonalChat from '../Screen/PersonalChat';
// import Profile from '../Screen/Profile';
import Routes from './Router';
import Reels from '../Screen/Reels';
import Home from '../../containers/Home'
import City from '../../components/City';
import Filters from '../../components/Filters';
import CardItem from '../../components/CardItem';
import Matches from '../../containers/Matches';
import Messages from '../../containers/Messages';
import Message from '../../components/Message';
import Profile from '../../containers/Profile';
import ProfileItem from '../../components/ProfileItem';


enableScreens();
// androidDeviceFontFix();
const hideHeader = { headerShown: false };
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const width = Dimensions.get('window').width;
const screen_height = Dimensions.get('screen').height

const screenOptions = {


  headerStyle: {
    backgroundColor: Colors.bgWhite,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.bgBlack,
  headerTitleStyle: {
    fontWeight: '400',
  },
  headerTitleAlign: 'center',

};

export default function Navigator() {


  const BottomTabsNavigator = () => {
    const isFocused = useIsFocused();
    return (
      <Tab.Navigator initialRouteName='HomeStack' backBehavior='history'
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors.bgWhite, height: screen_height * .10 },
          tabBarActiveTintColor: Colors.recipesPink,
          tabBarInactiveTintColor: Colors.bgBlack,

          tabBarLabelStyle: { fontSize: 12, bottom: '10%', fontFamily: Fonts.RobotoMedium },
        }}>

        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarLabel: 'Home',
          headerShown: false, tabBarIcon: ({ focused, color }) => (
            <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
              <FastImage source={focused ? Icons.IcHomeFilled : Icons.IcHome} resizeMode='contain' style={{ width: '70%', height: '70%' }} />
            </View>
          )
        }} />

        <Tab.Screen name="Match" component={MatchStack} options={{
          headerShown: false, tabBarIcon: ({ focused, color }) => (
            <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
              <FastImage source={focused ? Icons.IcMatchFilled : Icons.IcMatch} resizeMode='contain' style={{ width: '70%', height: '70%' }} />
            </View>
          )
        }} />

        <Tab.Screen name="Create" component={ReelStack} options={{
          headerShown: false, tabBarIcon: ({ focused, color }) => (
            <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
              <FastImage source={focused ? Icons.IcReelsFilled : Icons.IcReels} resizeMode='contain' style={{ width: '70%', height: '70%' }} />
            </View>
          )
        }} />

        <Tab.Screen name="Chat" component={MessageStack} options={{
          headerShown: false, tabBarIcon: ({ focused, color }) => (
            <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
              <FastImage source={focused ? Icons.IcChatFilled : Icons.IcChat} resizeMode='contain' style={{ width: '70%', height: '70%' }} />
            </View>
          )
        }} />

        <Tab.Screen name="Profile" component={ProfileStack} options={{
          headerShown: false, tabBarIcon: ({ focused, color }) => (
            <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
              <FastImage source={focused ? Icons.IcUserFilled : Icons.IcUser} resizeMode='contain' style={{ width: '70%', height: '70%', }} />
            </View>
          )
        }} />

      </Tab.Navigator>
    );
  }

  const AppStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.BottomTabs.name} screenOptions={hideHeader} >
        {/* <Stack.Screen name={Routes.Splash.name} component={Routes.Splash.Screen} />
        <Stack.Screen name={Routes.SignUp.name} component={Routes.SignUp.Screen} />

        <Stack.Screen name={Routes.Otp.name} component={Routes.Otp.Screen} />
        <Stack.Screen name={Routes.SignUpDetails.name} component={Routes.SignUpDetails.Screen} />
        <Stack.Screen name={Routes.Profile.name} component={Routes.Profile.Screen} />
        <Stack.Screen name={Routes.MyProfile.name} component={Routes.MyProfile.Screen} /> */}
        <Stack.Screen name={Routes.BottomTabs.name} component={BottomTabsNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }


  const HomeStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home.name} component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.City.name} component={City} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.Filters.name} component={Filters} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.CardItem.name} component={CardItem} options={{ headerShown: false }} />






      </Stack.Navigator>
    )
  }
  const MatchStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Matches.name} component={Matches} options={{ headerShown: false }} />
        


      </Stack.Navigator>
    )
  }
  const ReelStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Reels.name} component={Reels} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  const MessageStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Messages.name} component={Messages} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.Message.name} component={Message} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }
  const ProfileStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Profile.name} component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.ProfileItem.name} component={ProfileItem} options={{ headerShown: false }} />



      </Stack.Navigator>
    )
  }

  return (
    <AppStack />
  )
};

const DashStyles = StyleSheet.create({
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  adress: {
    left: 8,
  },
  deliverTxt: {
    fontSize: 13,
    color: Colors.darkGrey,
    fontFamily: Fonts.RobotoBold
  },
  adressTxt: {
    color: Colors.textColor,
    fontWeight: '500',
    fontSize: 13,
    fontFamily: Fonts.RobotoBold
  },
  logo: {
    width: '100%',
    height: '90%',
  },
  locationLogo: {
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  circle: {
    width: 44,
    height: 44,
    backgroundColor: Colors.bgWhite,
    borderRadius: 50,
    marginVertical: 7,
    padding: 10
  },
  notificationcircle: {
    width: 44,
    height: 44,
    backgroundColor: Colors.bgWhite,
    borderRadius: 50,
    marginVertical: 7,
    padding: 10,
    position: 'relative'
  },
  notificationcount: {
    color: Colors.textColor,
    fontWeight: '500',
    fontSize: 13,
    fontFamily: Fonts.RobotoBold,
    position: 'absolute',
    right: 0,
    top: 0,
  }
})
