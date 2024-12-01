import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function CourseCard({ course, isHovered, onHoverIn, onHoverOut }) {
  return (
    <Animated.View
      style={[styles.card, isHovered && styles.cardHovered]}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <TouchableOpacity>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHovered: {
    transform: [{ scale: 1.05 }],
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
