const state = {
  showMenu: true
}

const mutations = {
  TOGGLE_MENU: (state: any) => {
    state.showMenu = !state.showMenu
  }
}

const actions = {
  toggleMenu({ commit }: any) {
    commit('TOGGLE_MENU')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
