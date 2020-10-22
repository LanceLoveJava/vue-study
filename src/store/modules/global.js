const state = {
    siderOff: false
}

const mutations = {
    SETSIDER: (state, off) => {
        state.siderOff = off
}
}

const actions = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
