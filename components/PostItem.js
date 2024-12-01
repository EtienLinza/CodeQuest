import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostItem({ post }) {
  return (
    <View style={styles.container}>
      <Text style={styles.postText}>{post}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  postText: {
    fontSize: 16,
    color: '#333',
  },
});
