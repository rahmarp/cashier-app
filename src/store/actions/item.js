import * as actionTypes from './actionTypes'

export const getMenu = (menu, cart, itemIds, levelId, qty, note) => {
    return {
        type: actionTypes.GET_MENU,
        menu: menu, //menuId
        cart: cart, //true or false
        itemIds: itemIds, //[0,1,2,3]
        levelId: levelId, //0,
        qty: qty,
        note: note

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