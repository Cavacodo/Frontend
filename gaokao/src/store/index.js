import {createStore} from 'vuex'

const state = {
    showingSchoolId: 1,
    s:"tt",
    test: 0,
    count: 0,
}
const getters = {
}
const actions = {}
const mutations = {
    changeSchoolId(state,sId) {
        state.showingSchoolId = sId
    }
}
export default createStore({
    state,
    getters,
    actions,
    mutations
})