import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CoursesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      <TouchableOpacity
        style={styles.courseButton}
        onPress={() => navigation.navigate('HTMLCSSBasics')} // This targets the nested screen within the CoursesStack
      >
        <Text style={styles.courseText}>HTML & CSS Basics</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseButton: {
    padding: 15,
    backgroundColor: '#6200EE',
    borderRadius: 10,
    marginVertical: 10,
  },
  courseText: {
    color: 'white',
    fontSize: 18,
  },
});
