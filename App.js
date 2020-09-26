import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

import { MealsList } from './src/components/MealsList'
import { Cart } from './src/components/Cart'
import { MealModal } from './src/components/MealModal'

import { Provider } from 'react-redux'
import store from './store'


export default function App() {
  const [mealModalFlag, toggleMealModal] = useState(false)
  const [cartModalFlag, toggleCartModal] = useState(false)

  const onListItemIsPressed = () => {
    toggleMealModal(true)
    
  }

  const onCartButtonIsPressed = () => {
    toggleCartModal(true)
  }

  const closeMealModal = () => {
    toggleMealModal(false)
  }

  const closeCartModal = () => {
    toggleCartModal(false)
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Button onPress={onCartButtonIsPressed} title={'Carrinho'} />
        <Cart modalFlag={cartModalFlag} closeModal={closeCartModal} />
        <MealsList onListItemIsPressed={onListItemIsPressed} />
        <MealModal modalFlag={mealModalFlag} closeModal={closeMealModal} />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});
