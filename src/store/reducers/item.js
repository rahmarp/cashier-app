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
            "menu": "Smiley Oreo Lego Ululu",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Nasi + Daging Rendang + Sayur + Sambal + Kuah + Daun Singkong + Asli Masakan Padang",
            "price": 25000,
            "add" : [
                {
                    "id": 0,
                    "item": "telur",
                    "itemPrice": 5000
                },
                {
                    "id": 1,
                    "item": "Kacang Polong",
                    "itemPrice": 3000
                },
                {
                    "id": 2,
                    "item": "Kerupuk",
                    "itemPrice": 9000
                },

            ],
            "level" : [
                {
                    "id": 0,
                    "level": "Level 0",
                    "levelPrice": 0
                },
                {
                    "id": 1,
                    "level": "Level 1",
                    "levelPrice": 1000
                },
                {
                    "id": 2,
                    "level": "Level 2",
                    "levelPrice": 2000
                },
                {
                    "id": 3,
                    "level": "Level 5",
                    "levelPrice": 3000
                }
            ],
            "categoryId": 0
        },
        {
            "id":1,
            "menu": "Nasi Putih",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Nasi Putih",
            "price": 9000,
            "categoryId": 0
        },
        {
            "id":2,
            "menu": "Mie Goreng",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Mie Goreng",
            "price": 20000,
            "add" : [
                {
                    "id": 0,
                    "item": "Sayur",
                    "itemPrice": 5000
                },
                {
                    "id": 1,
                    "item": "Kacang Polong",
                    "itemPrice": 3000
                },
                {
                    "id": 2,
                    "item": "Kerupuk",
                    "itemPrice": 9000
                },

            ],
            "categoryId": 0
        },
        {
            "id":3,
            "menu": "Mie Kuah",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Mie Kuah",
            "price": 10000,
            "level" : [
                {
                    "id": 0,
                    "level": "Level 0",
                    "levelPrice": 0
                },
                {
                    "id": 1,
                    "level": "Level 1",
                    "levelPrice": 1000
                },
                {
                    "id": 2,
                    "level": "Level 2",
                    "levelPrice": 2000
                },
                {
                    "id": 3,
                    "level": "Level 5",
                    "levelPrice": 3000
                }
            ],
            "categoryId": 0
        },
        {
            "id":4,
            "menu": "Teh",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            // "description": "",
            "price": 5000,
            "categoryId": 1
        },
        {
            "id":5,
            "menu": "Milkshake",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "price": 10000,
            "categoryId": 1
        },
        {
            "id":6,
            "menu": "Ice Cream",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Ice Cream",
            "price": 10000,
            "categoryId": 3
        },
        {
            "id":7,
            "menu": "Paket Berbuka",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            "description": "Nasi Goreng, Teh",
            "price": 10000,
            "categoryId": 2
        },
        {
            "id":8,
            "menu": "Paket Keluarga",
            "image": 'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
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
    const menus = state.menu.filter(obj => obj.id === action.menu)
    let menu = {}    
    if(!action.cart){
        for (let i in menus){
            let items = []
            if(menus[i].add !== undefined){
            items = menus[i].add.map(obj =>{
                return{
                    "id" : obj.id,
                    "item": obj.item,
                    "itemPrice": obj.itemPrice,
                    "check": false
                }
            })}
            let level = []
            if(menus[i].level !== undefined){
            level = menus[i].level.map(obj =>{
                return{
                    "id" : obj.id,
                    "level": obj.level,
                    "levelPrice": obj.levelPrice,
                    "check": false
                }
            })}
            menu ={
                "id": menus[i].id,
                "menu" :  menus[i].menu,
                "description" : menus[i].description,
                "price" : menus[i].price,
                "item" : items,
                "level" : level,
                "note": "",
                "qty" : 1,
                "cart" : action.cart
            }
        }
    }
    else {
        if(action.itemIds === null && action.levelId === ''){
            for (let i in menus){
                let items = []
                if(menus[i].add !== undefined){
                items = menus[i].add.map(obj =>{
                    return{
                        "id" : obj.id,
                        "item": obj.item,
                        "itemPrice": obj.itemPrice,
                        "check": false
                    }
                })}
                let level = []
                if(menus[i].level !== undefined){
                level = menus[i].level.map(obj =>{
                    return{
                        "id" : obj.id,
                        "level": obj.level,
                        "levelPrice": obj.levelPrice,
                        "check": false
                    }
                })}
                menu ={
                    "id": menus[i].id,
                    "menu" :  menus[i].menu,
                    "description" : menus[i].description,
                    "price" : menus[i].price,
                    "item" : items,
                    "level" : level,
                    "note": action.note,
                    "qty" : action.qty,
                    "cart" : action.cart
                }
            }
        }
        else{
            for (let i in menus){
                let items = []
                if(menus[i].add !== undefined){
                items = menus[i].add.map(obj =>{
                    return{
                        "id" : obj.id,
                        "item": obj.item,
                        "itemPrice": obj.itemPrice,
                        "check": action.itemIds.includes(obj.id)
                    }
                })}
                let level = []
                if(menus[i].level !== undefined){
                level = menus[i].level.map(obj =>{
                    return{
                        "id" : obj.id,
                        "level": obj.level,
                        "levelPrice": obj.levelPrice,
                        "check": action.levelId === obj.id
                    }
                })}
                menu ={
                    "id": menus[i].id,
                    "menu" :  menus[i].menu,
                    "description" : menus[i].description,
                    "price" : menus[i].price,
                    "item" : items,
                    "level" : level,
                    "note": action.note,
                    "qty" : action.qty,
                    "cart" : action.cart
                }
            }
        }
    }
    return updatedObject(state, {
        menuItem: menu
    })

    

}
const getMenuAdd = (state,action) => {
    const menu = Object.keys(state.menu)
        .filter(obj => state.menu[obj].id === action.menu)
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
    return updatedObject(state, {
        menuAdd: items
    })

}

const getMenuLevel = (state,action) => {
    const menu = Object.keys(state.menu)
        .filter(obj => state.menu[obj].id === action.menu)
        .map(obj => (
            state.menu[obj]
        ))
    let items = {}
    for (let i in menu){
        if( menu[i].level !==  undefined){
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
