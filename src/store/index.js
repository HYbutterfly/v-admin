import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        me: {
            id: "123456",
            nick: "JulyWind",
            role: "editor"
        }
    },
    mutations: {
		login (state, data) {
			state.token = data.token;
			state.me = data.me;
        },
        logout(state) {
            state.token = null;
        }
    },
    actions: {
    },
    modules: {
    }
})
