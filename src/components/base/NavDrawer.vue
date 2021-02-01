<template>
    <v-navigation-drawer
        app
        dark
        v-model="drawer"
        @transitionend="handleTransitionend"
    >
    <v-list-item class="px-2">
    <v-list-item-avatar>
        <img src="@/assets/head.jpg" />
    </v-list-item-avatar>

    <v-list-item-title>{{$store.state.me.nick}}</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
        <nav-drawer-item
            v-for="item in items"
            :key="item.title"
            :item="item"
            :lv = 0
        />
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import NavDrawerItem from './NavDrawerItem.vue'
import ec from '@/eventcenter'
import { drawers } from '@/config/routes'

export default {
    name: "NavDrawer",
    components: {
        NavDrawerItem
    },
    mounted () {
        if (!this.is_mobile) {
            this.$nextTick(() => {
                ec.pub('window_resize');
            })
        }
        ec.sub("reverse_drawer", this, () => {
            this.drawer = !this.drawer;
        })
        this.$once('hook:beforeDestroy', () => {
            ec.unsub("reverse_drawer", this);
        })
    },
    methods : {
        handleTransitionend (e) {
            if ((!this.is_mobile) && e.propertyName == "visibility") {
                ec.pub('window_resize');
            }
        }
    },
    data () {
        return {
            drawer: null,
            items: drawers,
            // items: [
            //     { title: '嵌套', icon: 'mdi-layers', children: [
            //         {
            //             title: "菜单1",
            //             to: "/home/nesting/menu1"
            //         },
            //         {
            //             title: "菜单2",
            //             to: "/home/nesting/menu2"
            //         }
            //     ]},
            //     { title: 'My Account', icon: 'mdi-account', to: "/home/my"},
            //     { title: 'Users', icon: 'mdi-account-group-outline', to: "/home/users"},
            // ],
        }
    },
}
</script>