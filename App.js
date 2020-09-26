import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { MealsList } from './src/components/MealsList'
import { Cart } from './src/components/Cart'
import { MealModal } from './src/components/MealModal'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cart />
      <MealsList />
      <MealModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});
