import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Profile,
  Explore,
} from '../Screens/index1';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      //screenOptions={{headerShown:false}}
    initialRouteName={navigationStrings.HOME}> 
        <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Tab.Screen options={{ title: 'My Home' }} name={navigationStrings.HOME} component={Home} />
        <Tab.Screen name={navigationStrings.EXPLORE} component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
