import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { Home } from './components/Home'
import { CuttingMeat } from './components/CuttingMeat'
import { Cart } from './components/Cart'

import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();

const Routes = () => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = 'home'
            } else if (route.name === 'Corte') {
              iconName = 'food-croissant'
            }
            else if(route.name === 'Carrinho') {
              iconName = 'cart'
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Corte" component={CuttingMeat} />
        <Tab.Screen name="Carrinho" component={Cart} options={{ tabBarBadge: cartItems.length }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes;