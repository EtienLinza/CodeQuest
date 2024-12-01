import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CoursesStack from './navigation/CoursesStack';
import CommunityScreen from './screens/CommunityScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconPath;
            if (route.name === 'Home') iconPath = require('./assets/1.png');
            else if (route.name === 'Courses') iconPath = require('./assets/2.png');
            else if (route.name === 'Community') iconPath = require('./assets/3.png');
            else if (route.name === 'About') iconPath = require('./assets/4.png');
            return <Image source={iconPath} style={{ width: 30, height: 30 }} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Courses" component={CoursesStack} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
