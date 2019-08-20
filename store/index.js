export const state = () => ({
  cartUIStatus: 'idle',
  cart: []
})

export const getters = {
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, cur) => acc + cur.quantity, 0)
  },
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  }
}

export const mutations = {
  addToCart: (state, payload) => {
    let itemFound = false
    state.cart = state.cart.map((e) => {
      if (e.id === payload.id) {
        e.quantity = payload.quantity
        itemFound = true
      }
      return e
    })
    if (!itemFound) state.cart.push(payload)
  }
}

export const actions = {}
