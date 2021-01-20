import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../utility'

const initialState = {
    cart: [],
    counter: 0,
}

const addCart = (state, action) => {
    let itemID = (action.menu.itemIds).join('-')
    let key = ""
    if(action.menu.itemIds.length > 0){
        if(action.menu.levelId !== ''){
            key = action.menu.menuId + '-' + itemID + '-' + action.menu.levelId
        }
        else{
            key = action.menu.menuId + '-' + itemID
        }
    }
    else {
        if(action.menu.levelId !== ''){
            key = action.menu.menuId + '-' + action.menu.levelId
        }
        else{
            key = action.menu.menuId
        }
    }
    let index = state.cart.findIndex(obj => obj.key === key && obj.note === action.menu.note)
    console.log(key)

    let currentCart = {
        id: state.counter,
        key: key,
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
        if (index >= 0){
            const newArray = [...state.cart]
            newArray[index].qty += action.menu.qty
            newArray[index].price += action.menu.price
            return updatedObject( state, {
                cart: newArray
        })
        }
        else{
            return updatedObject( state, {
                cart: [...state.cart, currentCart],
                counter: state.counter + 1
        })
        }
        
    }
    
}

const updateCart = (state, action) => { 
    let newArray = [...state.cart] 
    if(action.menu.itemIds.length > 0 || action.menu.levelId !== '' ) {
        let itemID = (action.menu.itemIds).join('-')
        let key = ""
        if(action.menu.itemIds.length > 0){
            if(action.menu.levelId !== ''){
                key = action.menu.menuId + '-' + itemID + '-' + action.menu.levelId
            }
            else{
                key = action.menu.menuId + '-' + itemID
            }
        }
        else {
            if(action.menu.levelId !== ''){
                key = action.menu.menuId + '-' + action.menu.levelId
            }
            else{
                key = action.menu.menuId
            }
        }
        let indexKey = newArray.findIndex(obj => obj.key === key && obj.note === action.menu.note)
        let newArrays = newArray.filter(obj => obj.key === key)

        
        console.log(newArrays)
        
        if(newArrays.length > 1){
            newArrays = newArrays.filter(obj => obj.note === action.menu.note)
                if(newArrays.length > 1){
                    newArray[indexKey].qty += action.menu.qty
                    newArray[indexKey].price += action.menu.price
                    newArray = newArray.filter(cart => cart.id !== action.cartId)
                    return updatedObject( state, {
                        cart: newArray
                    })
                }
                else {
                    newArray[indexKey].qty += action.menu.qty
                    newArray[indexKey].price += action.menu.price
                    newArray = newArray.filter(cart => cart.id !== action.cartId)
                    return updatedObject( state, {
                        cart: newArray
                    })
                }
            
            
            
        }
        else {
            let updateCart = {
                id: action.cartId,
                key: key,
                menuId: action.menu.menuId,
                qty: action.menu.qty,
                price: action.menu.price,
                note: action.menu.note,
                itemIds: action.menu.itemIds,
                levelId: action.menu.levelId
            }
            newArray[action.cartId] = updateCart
            return updatedObject( state, {
                cart: newArray
            })
            
        }
    }
    else{
        let updateCart = {
            id: action.cartId,
            key: action.menu.menuId,
            menuId: action.menu.menuId,
            qty: action.menu.qty,
            price: action.menu.price,
            note: action.menu.note,
            itemIds: action.menu.itemIds,
            levelId: action.menu.levelId
        }
        newArray[action.cartId] = updateCart
        return updatedObject( state, {
            cart: newArray
        })
        
    }
}

const deleteCart = (state, action) => {
    const newArray = state.cart.filter(cart => cart.id !== action.cartId)
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