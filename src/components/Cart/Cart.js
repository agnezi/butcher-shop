import React from 'react'
import { Button, Platform, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { useDispatch, useSelector } from 'react-redux'

import shortid from 'shortid'
import { removeFromCart, addToCart } from '../../store/ducks/cart/actions'

import { EmptyCart } from '../../commons/EmptyCart'

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cart.items)

	const handleAddToCart = (item) => {
		dispatch(addToCart({
			key: Date.now(),
			title: item.title,
			price: item.price
		}))
	}


	const handleRemoveFromCart = (item) => {
		dispatch(removeFromCart(item?.key))
	}
	return (
		<SafeAreaView style={styles.modalContainer}>
			<ScrollView>
				<View style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					padding: 16,
				}}>
					{cartItems.length ? (
						cartItems.map(item => (
							<React.Fragment key={shortid.generate()}>
								<View style={{
									justifyContent: 'space-evenly',
									width: '100%',
									alignItems: 'center',
									marginTop: 16,
									padding: 8,
									borderTopColor: '#4a4a4a',
									borderTopWidth: 2,
									borderBottomColor: '#4a4a4a',
									borderBottomWidth: 2,
									borderLeftColor: '#4a4a4a',
									borderLeftWidth: 2,
									borderRightColor: '#4a4a4a',
									borderRightWidth: 2,
									borderRadius: 8
								}}>
									<View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
										<Text style={{ fontSize: 24 }}>{item.title} </Text>
										<Text key={shortid.generate()} style={{ fontSize: 24, fontWeight: 'bold' }}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</Text>
									</View>
									<View
										style={{ flexDirection: 'row', justifyContent: 'space-around' }}
									>
										<View style={{
											backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
											marginVertical: 8,
											borderRadius: 4,
										}}>
											<Button title={'Remover'} color={Platform.OS === 'ios' ? '#000' : '#c02f0c'} onPress={() => handleRemoveFromCart(item)} />
										</View >
										<View style={{
											backgroundColor: Platform.OS === 'ios' ? '#6caa1b' : 'none',
											marginVertical: 8,
											borderRadius: 4,
										}}>
											<Button title={'Adicionar'} color={Platform.OS === 'ios' ? '#000' : '#6caa1b'} onPress={() => handleAddToCart(item)} />
										</View >
									</View>
								</View>
							</React.Fragment>
						))) : (
							<>
								<EmptyCart />
								<View>
									<Text style={{fontSize:24}}>Carrinho vazio!</Text>
								</View>
							</>
						)
					}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
	}
})

export default Cart