import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    collectItems: [],
    searchResult: {}
}

localStorage.getItem('collector') ? state.collectItems = localStorage.getItem('collector').split(',') : false;

const mutations = {
    SET_RESULT(state, result) {
        state.searchResult = result;
    },
    COLLECT_IT (state, name) {
        state.collectItems.push(name);
        localStorage.setItem('collector', state.collectItems);
    },
    DELETE_COLLECTION(state, name) {
        state.collectItems.splice(state.collectItems.indexOf(name, 1));
        localStorage.setItem('collector', state.collectItems)
    }
}

export default new Vuex.Store({
    state,
    mutations
})
