// import axios from 'axios'
// import uuidv1 from 'uuid/v1'
import data from '~/static/storedata.json'

export const state = () => ({
  cartUIStatus: 'idle',
  storedata: data,
  cart: []
})

export const getters = {
  featuredProducts: (state) => state.storedata.slice(0, 3), // 取前三個商品
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, cur) => acc + cur.quantity, 0)
  },
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  }
}
