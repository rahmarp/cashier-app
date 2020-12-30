import * as actionTypes from './actionTypes'

export const setCategories = () => {
    return {
        type: actionTypes.SET_CATEGORIES,
        data:   [
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
            ]
    }
}

export const setMenu = () => {
    return {
        type: actionTypes.SET_MENU,
        data: [
                {
                    "id":0,
                    "menu": "Nasi Goreng",
                    "description": "Nasi + Daging Rendang + Sayur + Sambal + Kuah + Daun Singkong + Asli Masakan Padang",
                    "price": 25000,
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
                    "menu": "Milkshake",
                    "description": "Milkshake",
                    "price": 10000,
                    "categoryId": 1
                    }
        ]
    }
}

export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED,
    }
}

// export const initCategories = () => {
//     return dispatch => {
//         dispatch(setCategories(categories))
//     }
// }
