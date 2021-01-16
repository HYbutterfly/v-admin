<template>
    <v-app-bar
        app
        flat
        dense
    >
        <v-app-bar-nav-icon @click="reverse_drawer()"></v-app-bar-nav-icon>

        <v-breadcrumbs
            :items="crumbs"
            divider="/"
        ></v-breadcrumbs>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>

import { navigator } from '@/config/routes'
import ec from '@/eventcenter'


// ["", "home", ""]
// ["", "home", "users"]
function path2crumbs(path) {
    let crumbs = [];
    let list = path.split("/");
    if (list[0] == "") {
        list.splice(0, 1);
    }
    if (list[list.length - 1] == "") {
        list.splice(list.length - 1, 1);
    }

    let to = "/";
    list.forEach(item => {
        to += item;
        if (item != "") {
            crumbs.push({
                text: navigator[to] != null?  navigator[to].title : "未定义",
                to: to,
                exact: true,
                disabled: navigator[to]? !navigator[to].is_link || !navigator[to].is_root : true
            });
        }
        to += '/';
    });
    return crumbs;
}


export default {
    methods: {
        reverse_drawer () {
            ec.pub("reverse_drawer");
        }
    },
    created () {
        this.crumbs = path2crumbs(this.$route.path);
        this.$router.afterEach((to) => {
            this.crumbs = path2crumbs(to.path);
        })
    },
    data () {
        return {
            crumbs: []
        }
    },
    components: {
    }
}
</script>

<style>

</style>