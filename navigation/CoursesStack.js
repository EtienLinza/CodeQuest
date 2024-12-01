import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesScreen from '../screens/CoursesScreen';
import HTMLCSSBasics from '../screens/HTMLCSSBasics';

const Stack = createStackNavigator();

export default function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesMain" component={CoursesScreen} options={{ title: 'Courses' }} />
      <Stack.Screen name="HTMLCSSBasics" component={HTMLCSSBasics} options={{ title: 'HTML & CSS Basics' }} />
    </Stack.Navigator>
  );
}
