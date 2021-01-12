import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../utility'

const initialState = {
    categories: [
        {
            "id": 0,
            "title": "Foods"
        },
        {
            "id":1,
            "title":"Beverages"
        },
        {
            "id":2,
            "title": "Package Menu"
        },
        {
            "id":3,
            "title": "Dessert"
        },
        {
            "id":4,
            "title": "Family Pack"
        },
        {
            "id":5,
            "title": "On The Go"
        }
    ],
    menu: [
        {
            "id":0,
            "menu": "Nasi Goreng",
            "description": "Nasi + Daging Rendang + Sayur + Sambal + Kuah + Daun Singkong + Asli Masakan Padang",
            "price": 25000,
            "add" : [
                {
                    "item": "telur",
                    "itemPrice": 5000
                },
                {
                    "item": "Kacang Polong",
                    "itemPrice": 3000
                },
                {
                    "item": "Kerupuk",
                    "itemPrice": 9000
                },

            ],
            "level" : [
                {
                    "level": "Level 0",
                    "levelPrice": 0
                },
                {
                    "level": "Level 1",
                    "levelPrice": 1000
                },
                {
                    "level": "Level 2",
                    "levelPrice": 2000
                },
                {
                    "level": "Level 5",
                    "levelPrice": 3000
                }
            ],
            "categoryId": 0
        },
        {
            "id":1,
            "menu": "Nasi Putih",
            "description": "Nasi Putih",
            "price": 9000,
            "categoryId": 0
        },
        {
            "id":2,
            "menu": "Mie Goreng",
            "description": "Mie Goreng",
            "price": 20000,
            "categoryId": 0
        },
        {
            "id":3,
            "menu": "Mie Kuah",
            "description": "Mie Kuah",
            "price": 10000,
            "categoryId": 0
        },
        {
            "id":4,
            "menu": "Teh",
            "description": "",
            "price": 5000,
            "categoryId": 1
        },
        {
            "id":5,
            "menu": "Milkshake",
            "description": "Milkshake",
            "price": 10000,
            "categoryId": 1
        },
        {
            "id":6,
            "menu": "Ice Cream",
            "description": "Ice Cream",
            "price": 10000,
            "categoryId": 3
        },
        {
            "id":7,
            "menu": "Paket Berbuka",
            "description": "Nasi Goreng, Teh",
            "price": 10000,
            "categoryId": 2
        },
        {
            "id":8,
            "menu": "Paket Keluarga",
            "description": "Isinya banyak banget gilee",
            "price": 10000,
            "categoryId": 4
            }
],
    menuItem: null,
    menuAdd: null,
    menuLevel: null
}


const getMenu = (state,action) => {
    const menu = Object.keys(state.menu)
        .filter(obj => state.menu[obj].menu === action.menu)
        .map(obj => (
            state.menu[obj]
        ))
    return updatedObject(state, {
        menuItem: menu
    })

}
const getMenuAdd = (state,action) => {
    const menu = Object.keys(state.menu)
        .filter(obj => state.menu[obj].menu === action.menu)
        .map(obj => (
            state.menu[obj]
        ))
    let items = {}
    for (let i in menu){
        if( menu[i].add !==  undefined){
        items =  menu[i].add
        }
        else {
        items = {}
        }
    }
    console.log(items)
    return updatedObject(state, {
        menuAdd: items
    })

}

const getMenuLevel = (state,action) => {
    const menu = Object.keys(state.menu)
        .filter(obj => state.menu[obj].menu === action.menu)
        .map(obj => (
            state.menu[obj]
        ))
    let items = {}
    for (let i in menu){
        if( menu[i].add !==  undefined){
        items =  menu[i].level
        }
        else {
        items = {}
        }
    }
    return updatedObject(state, {
        menuLevel: items
    })
}

const reducer = ( state = initialState, action )=> {
    switch (action.type) {
        case actionTypes.GET_MENU : return getMenu(state, action)
        case actionTypes.GET_MENUADD : return getMenuAdd(state, action)
        case actionTypes.GET_MENULEVEL : return getMenuLevel(state,action)
        default:
            return state;
    }
}

export default reducer
