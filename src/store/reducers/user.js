import { updatedObject } from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    users: "",
    table: ""
}

const addUser = ( state, action ) => {
    const updatedUser = action.user
    const updatedTable =  action.table
    const updatedState = {
        users: updatedUser,
        table: updatedTable
    }
    return updatedObject(state, updatedState)
    
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ){
        case actionTypes.ADD_USER: return addUser(state, action)
        default: return state
    }
}

export default reducer