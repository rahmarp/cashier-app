import * as actionTypes from './actionTypes'

export const addUser = (name, tables) => {
    return {
        type: actionTypes.ADD_USER,
        user: name,
        table: tables
    }
}