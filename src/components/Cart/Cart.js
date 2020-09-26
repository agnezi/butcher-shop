import React from 'react'
import { Button, Platform, Modal, View, Text, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

const Cart = ({ modalFlag, closeModal }) => {

    const cartItems = useSelector(state => state.cart.items)
    return (
        <Modal visible={modalFlag}>
            <View style={styles.modalContainer}>
                {cartItems.map(item => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )
                })}
                <View style={{
                    backgroundColor: Platform.OS === 'ios' ? '#c02f0c' : 'none',
                    padding: 20,
                    marginVertical: 8,
                    borderRadius: 4
                }}>
                    <Button onPress={closeModal} title={'Cancelar'} color={Platform.OS === 'ios' ? '#000' : '#c02f0c'} />
                </View >
            </View>
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

Cart.propTypes = {
    modalFlag: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}


export default Cart