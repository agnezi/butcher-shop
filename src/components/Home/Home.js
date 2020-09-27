import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet } from 'react-native';

import { MealsList } from '..//MealsList'
import { Cart } from '../Cart'
import { MealModal } from '../MealModal'
import { useSelector } from 'react-redux'

const Home = () => {

  const cartItems = useSelector(state => state.cart.items)
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
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button onPress={onCartButtonIsPressed} title={'Carrinho'} />
        <Text>{cartItems && cartItems.length ? cartItems.length : ''}</Text>
      </View>
      <Cart modalFlag={cartModalFlag} closeModal={closeCartModal} />
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