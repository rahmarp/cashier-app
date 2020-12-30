import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../utility'

const initialState = {
    categories: null,
    menu: null

}

const setCategories = (state, action) => {
    let data = {}
    for (let i =0; i< action.data.length; i++){
        data[i] = {
            id: action.data[i].id,
            title: action.data[i].title
        }
    }
    return updatedObject( state, {
            categories: data
    })
}

const setMenu = (state,action) => {
    let data = {}
    for (let i =0; i< action.data.length; i++){
        data[i] = {
            id: action.data[i].id,
            menu: action.data[i].menu,
            description: action.data[i].description,
            price: action.data[i].price,
            category: action.data[i].categoryId
        }
    }
    return updatedObject( state, {
            menu: data
    })
}

const reducer = ( state = initialState, action )=> {
    switch (action.type) {
        case actionTypes.SET_CATEGORIES :  return setCategories(state, action);
        case actionTypes.SET_MENU :  return setMenu(state, action);
        default:
            return state;
    }
}

export default reducer
