import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        me: {
            id: "123456",
            head: "https://randomuser.me/api/portraits/men/85.jpg",
            nick: "JulyWind",
            role: "editor"
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
