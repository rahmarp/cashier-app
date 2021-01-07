import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../utility'

const initialState = {
    cart: [],
}

const addCart = (state, action) => {
    let menu = {}
    for (let i =0; i< action.menu.length; i++){
        menu[i] = {
            menu: action.menu[i].menu,
            price: action.menu[i].price,
            qty: action.menu[i].qty
        }
    }
    if (state.cart === {}){
        return updatedObject( state, {
            cart: action.menu
    })
    }
    else{
        return updatedObject( state, {
            cart: [...state.cart, action.menu]
    })
    }
    
}

const updateCart = (state, action) => { 
    const index = state.cart.findIndex(cart => cart.menu === action.menu.menu)
    const newArray = [...state.cart]
    newArray[index] = action.menu
    return updatedObject( state, {
        cart: newArray
})
}

const deleteCart = (state, action) => {
    const newArray = state.cart.filter(cart => cart.menu !== action.menu)
    return updatedObject( state, {
        cart: newArray
    })
    
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_CART: return addCart(state,action)
        case actionTypes.UPDATE_CART : return updateCart(state,action)
        case actionTypes.DELETE_CART : return deleteCart(state, action)
        default: return state;
    }
}

export default reducer