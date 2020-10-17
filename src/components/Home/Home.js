import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { MealsList, MealModal } from './components'

const Home = () => {

  const [mealModalFlag, toggleMealModal] = useState(false)

  const onListItemIsPressed = () => {
    toggleMealModal(true)
  }

  const closeMealModal = () => {
    toggleMealModal(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <MealsList onListItemIsPressed={onListItemIsPressed} />
      <MealModal modalFlag={mealModalFlag} closeModal={closeMealModal} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});

export default Home