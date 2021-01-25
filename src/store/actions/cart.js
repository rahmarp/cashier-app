import * as actionTypes from './actionTypes'

export const addCart = ( item ) => {
    return {
        type: actionTypes.ADD_CART,
        menu: item
    }
}

export const updateCart = ( item, cartId ) => {
    return {
        type: actionTypes.UPDATE_CART,
        menu: item,
        cartId: cartId
    }
}

export const deleteCart = ( item ) => {
    return {
        type: actionTypes.DELETE_CART,
        cartId: item
    }
}

export const setOrder = (cart) => {
    return {
        type: actionTypes.SET_ORDER,
        cart:cart
    }
}