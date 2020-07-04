export const state = () => ({
  url: ""
})

export const getters = {
  getUrl (state, getters) {
    return state.url;
  }
}


export const mutations = {
  setUrl (state, value) {
    console.warn("Running setUrl", value);
    state.url = value
  }
}
