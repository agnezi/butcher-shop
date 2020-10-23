import React, { useEffect, useState } from 'react'
import { Platform, Modal, SafeAreaView, View, Text, StyleSheet, Button, TextInput, Alert, KeyboardAvoidingView } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import { addToCart } from '../../../../store/ducks/cart/actions'

const MealModal = ({ modalFlag, closeModal }) => {
	const item = useSelector(state => state.item.item)
	const dispatch = useDispatch()
	const [weight, setWeight] = useState(0)
	const [price, setPrice] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const totalPrice = (weight * price) / 1000
		const formatedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)
		setTotal(formatedPrice)
	}, [weight, price])

	const addItemToCart = () => {
		dispatch(addToCart({
			key: Date.now(),
			title: item,
			price: price
		}))
		Alert.alert("Adicionado ao carrinho", "Você pode fechar essa janela", [
			{ text: 'Fechar', onPress: closeModalAndResetComponentState }
		])
	}

	const closeModalAndResetComponentState = () => {
		setPrice(0)
		setWeight(0)
		closeModal()
	}

	return (
		<Modal animationType='slide' visible={modalFlag}>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<SafeAreaView style={styles.modalContainer}>
					<View style={{
						flex: 1,
						justifyContent: 'space-around', alignItems: 'center',
					}}>
						<Text style={{
							fontSize: 24
						}}>{item}</Text>
						<View style={{ width: '100%' }}>
							<TextInput
								autoFocus
								onChangeText={(text) => setWeight(parseInt(text || 0))}
								returnKeyType="done"
								style={styles.input}
								keyboardType="number-pad"
								placeholder='Peso (gr)' />
						</View>
						<View style={{ width: '100%' }}>
							<TextInput
								onChangeText={(text) => setPrice(parseInt(text || 0))}
								returnKeyType="done"
								keyboardType="numeric"
								style={styles.input}
								placeholder='Preço K/g' />
						</View>
						<View>
							<Text style={{ fontSize: 40 }}>{total}</Text>
						</View>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: '100%',
							alignItems: 'center'
						}}>
							<View style={{
								backgroundColor: Platform.OS === 'ios' ? '#6caa1b' : 'none',
								borderRadius: 4,
							}}>
								<Button onPress={addItemToCart} title={'Adicionar'} color={Platform.OS === 'ios' ? '#000' : '#6caa1b'} />
							</View >
							<View style={{
								backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
								borderRadius: 4,
							}}>
								<Button onPress={closeModalAndResetComponentState} title={'Cancelar'} color={Platform.OS === 'ios' ? '#000' : '#c02f0c'} />
							</View >
						</View>
					</View>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
	},
	input: {
		height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, borderTopWidth: 0, borderLeftWidth: 0,
		borderRightWidth: 0, marginLeft: 40, marginRight: 40
	}
})

MealModal.propTypes = {
	modalFlag: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired
}

export default MealModal