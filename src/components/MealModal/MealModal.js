import React, { useEffect, useState } from 'react'
import { Platform, Modal, SafeAreaView, View, Text, StyleSheet, Button, TextInput } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import { addToCart } from '../../../store/ducks/cart/actions'

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
            title: item,
            price: price
        }))
    }

    return (
        <Modal animationType='slide' visible={modalFlag}>
            <SafeAreaView style={styles.modalContainer}>
                <Text>Item</Text>
                <View style={{
                    width: '100%',
                }}>
                    <TextInput
                        onChangeText={(text) => setPrice(parseInt(text || 0))}
                        returnKeyType="done"
                        keyboardType="numeric"
                        style={{
                            height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, borderTopWidth: 0, borderLeftWidth: 0,
                            borderRightWidth: 0
                        }}
                        placeholder='Preço K/g' />
                    <TextInput
                        onChangeText={(text) => setWeight(parseInt(text || 0))}
                        returnKeyType="done"
                        keyboardType="numeric"
                        style={{
                            height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, borderTopWidth: 0, borderLeftWidth: 0,
                            borderRightWidth: 0
                        }}
                        placeholder='Peso (gr)' />

                </View>
                <Text>{total}</Text>
                <View style={{
                    backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
                    marginVertical: 8,
                    borderRadius: 4,
                    height: 40
                }}>

                    <Button onPress={closeModal} title={'Cancelar'} color={Platform.OS === 'ios' ? '#000' : '#c02f0c'} />
                </View >
                <View style={{
                    backgroundColor: Platform.OS === 'ios' ? '#6caa1b' : 'none',
                    marginVertical: 8,
                    borderRadius: 4,
                    height: 40
                }}>

                    <Button onPress={addItemToCart} title={'Adicionar'} color={Platform.OS === 'ios' ? '#000' : '#6caa1b'} />
                </View >
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

MealModal.propTypes = {
    modalFlag: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default MealModal