import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cashier-app-8306a-default-rtdb.firebaseio.com/'
})

export default instance