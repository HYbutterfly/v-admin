<template>
<v-app>
    <nav-drawer />
    <appbar />
    <!-- Sizes your content based upon application components -->
    <v-main class="teal lighten-5">
        <toolbar
            v-if="conf.link_tags.enable"
        />
        <!-- Provides the application the proper gutter -->
        <v-container fluid >

        <!-- If using vue-router -->
        <router-view></router-view>
        </v-container>
    </v-main>

    <v-footer app>
        <!-- -->
    </v-footer>
</v-app>
</template>

<script>
import Appbar from '../components/base/Appbar.vue'
import NavDrawer from '../components/base/NavDrawer.vue'
import Toolbar from '../components/base/Toolbar.vue'

import conf from '@/config'


export default {
    data () {
        return {
            conf: conf
        }
    },
    mounted () {
        this.$router.beforeEach((to, from, next) => {
            if (to.meta.permission && !to.meta.permission.includes(this.$store.state.me.role)) {
                next({
                    path: "/home/error/401",
                    query: { redirect: to.fullPath }
                });
            } else {
                next();
            }
        })
    },
    methods: {
        draw () {
        }
    },
    components: {
        NavDrawer,
        Appbar,
        Toolbar
    }
}
</script>