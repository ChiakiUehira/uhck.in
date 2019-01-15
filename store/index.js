
export const state = () => ({
  IS_NIGHT_MODE: null
})

export const getters = {
  isNightMode (state) {
    return state.IS_NIGHT_MODE === null ? localStorage.getItem('IS_NIGHT_MODE') === 'true' || false : state.IS_NIGHT_MODE
  }
}

export const mutations = {
  setIsNightMode (state, is) {
    state.IS_NIGHT_MODE = is
  }
}

export const actions = {
  setIsNightMode ({commit}, is) {
    localStorage.setItem('IS_NIGHT_MODE', is)
    commit('setIsNightMode', is)
  }
}