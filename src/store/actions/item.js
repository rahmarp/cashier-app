import * as actionTypes from './actionTypes'

export const getMenu = (menu) => {
    return {
        type: actionTypes.GET_MENU,
        menu: menu
    }
}