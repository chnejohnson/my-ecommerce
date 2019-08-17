export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state) {
    return state.products
  }
}

export const mutations = {
  GET_STORYBLOK(state, { storyblokProducts }) {
    state.products = storyblokProducts
  }
}

export const actions = {
  async getStoryblok({ commit }, app) {
    try {
      const res = await app.$storyapi.get('cdn/stories/', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'products'
      })
      commit('GET_STORYBLOK', {
        storyblokProducts: res.data.stories.map((product) => {
          return {
            id: product.slug,
            name: product.content.name,
            price: product.content.price,
            description: product.content.description,
            img: product.content.img
          }
        })
      })
    } catch (e) {
      throw new Error(e.message)
    }
  }
}
