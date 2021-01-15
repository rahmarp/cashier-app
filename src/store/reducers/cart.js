import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../utility'

const initialState = {
    cart: [],
    counter: 0,
}

const addCart = (state, action) => {
    let itemID = (action.menu.itemIds).join('-')

    let currentCart = {
        id: state.counter,
        key: action.menu.menuId + '-' + itemID + '-' + action.menu.levelId,
        menuId: action.menu.menuId,
        qty: action.menu.qty,
        price: action.menu.price,
        note: action.menu.note,
        itemIds: action.menu.itemIds,
        levelId: action.menu.levelId

    }
    if (state.cart === {}){
        return updatedObject( state, {
            cart: currentCart,
    })
    }
    else{
        return updatedObject( state, {
            cart: [...state.cart, currentCart],
            counter: state.counter + 1
    })
    }
    
}

const updateCart = (state, action) => { 
    const index = state.cart.findIndex(cart => cart.key === action.menu.menu)
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