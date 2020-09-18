const state = {
  systemName: '测试系统'
}

const mutations = {
  SET_SYSTEM_NAME: (state, name) => {
    state.systemName = name
  }
}

const actions = {
  setSystemName({ commit }, name) {
    commit('SET_SYSTEM_NAME', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
