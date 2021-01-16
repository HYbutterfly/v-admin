<template>
    <div v-if="checkPermission()">
        <v-list-item
            :key="item.title"
            link
            @click="handleClick()"
        >
            <v-list-item-icon v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title :class="title_class">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
                <v-icon
                    v-if="item.children"
                >
                    {{expanded? "mdi-chevron-up": "mdi-chevron-down"}}
                </v-icon>
        </v-list-item>
        <transition name="fade">
            <div class="blue-grey darken-3" v-if="item.children && expanded">
                <nav-drawer-item
                    v-for="child in item.children"
                    :key="child.title"
                    :item="child"
                    :lv="lv + 1"
                />
            </div>
        </transition>
    </div>
</template>

<script>


export default {
    name: "NavDrawerItem",
    props: ["item", "lv"],
    data () {
        return {
            route_path: this.$route.path,
            expanded: false,
        }
    },
    mounted () {
        this.$router.afterEach((to) => {
            this.route_path = to.path;
        })
    },
    computed: {

        title_class: function () {
            let cls = "ml-"+ (this.lv * 8);
            if (this.route_path == this.item.path) {
                cls += " blue--text text-lighten-3";
            }
            return cls;
        }
    },
    methods: {
        goto (path) {
            this.$router.push(path);
        },
        handleClick () {
            if (this.item.children) {
                this.expanded = !this.expanded;
            } else {
                this.goto(this.item.path);
            }
        },
        checkPermission () {
            if (this.item.permission && !this.item.permission.includes(this.$store.state.me.role)) {
                return false;
            }
            return true;
        }
    }
}
</script>

<style>

</style>