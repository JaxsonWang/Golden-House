const state = {
  systemName: '测试系统'
}

const mutations = {
  SET_SYSTEM_NAME: (state: any, name: any) => {
    state.systemName = name
  }
}

const actions = {
  setSystemName({ commit }: any, name: any) {
    commit('SET_SYSTEM_NAME', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
