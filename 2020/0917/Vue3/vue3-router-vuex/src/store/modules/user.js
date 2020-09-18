const state = {
  showMenu: true
}

const mutations = {
  TOGGLE_MENU: state => {
    state.showMenu = !state.showMenu
  }
}

const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
