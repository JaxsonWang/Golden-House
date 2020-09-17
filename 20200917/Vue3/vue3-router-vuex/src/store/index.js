import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

const store = createStore({
  getters,
  modules: {
    app,
    user
  }
})

export default store
