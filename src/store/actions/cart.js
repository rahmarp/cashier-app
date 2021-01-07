import * as actionTypes from './actionTypes'

export const addCart = ( item ) => {
    return {
        type: actionTypes.ADD_CART,
        menu: item
    }
}

export const updateCart = ( item ) => {
    return {
        type: actionTypes.UPDATE_CART,
        menu: item
    }
}

export const deleteCart = ( item ) => {
    return {
        type: actionTypes.DELETE_CART,
        menu: item
    }
}