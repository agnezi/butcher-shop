import React from 'react'
import { Button, Platform, View, Text, StyleSheet, SafeAreaView } from 'react-native'

import { useSelector } from 'react-redux'

import shortid from 'shortid'

const Cart = () => {

	const cartItems = useSelector(state => state.cart.items)
	return (
		<SafeAreaView style={styles.modalContainer}>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'flex-end'
			}}>
				<View style={{
					backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
					marginVertical: 8,
					borderRadius: 4,
					width: '20%',
				}}>
				</View >
			</View>
			<View style={{
				flex: 1,
				justifyContent: 'center', alignItems: 'center',
			}}>
				{cartItems.length ? (
					cartItems.map(item => (
						<React.Fragment key={shortid.generate()}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', alignItems: 'center' }}>
								<View>
									<Text key={shortid.generate()}>{item.title} {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</Text>
								</View>
								<View
									style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '20%' }}
								>
									<View style={{
										backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
										marginVertical: 8,
										borderRadius: 4,
									}}>
										<Button title={'-'} color={Platform.OS === 'ios' ? '#000' : '#c02f0c'} />
									</View >
									<View style={{
										backgroundColor: Platform.OS === 'ios' ? '#6caa1b' : 'none',
										marginVertical: 8,
										borderRadius: 4,
									}}>
										<Button title={'+'} color={Platform.OS === 'ios' ? '#000' : '#6caa1b'} />
									</View >
								</View>
							</View>
						</React.Fragment>
					))) : (<Text>Vazio</Text>)
				}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
	}
})

export default Cart