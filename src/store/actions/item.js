import * as actionTypes from './actionTypes'

export const getMenu = (menu) => {
    return {
        type: actionTypes.GET_MENU,
        menu: menu
    }
}

export const getMenuAdd = (menu) => {
    return {
        type: actionTypes.GET_MENUADD,
        menu: menu
    }
}

export const getMenuLevel = (menu) => {
    return {
        type: actionTypes.GET_MENULEVEL,
        menu:menu
    }
}