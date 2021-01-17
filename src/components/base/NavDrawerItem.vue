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
        <div ref="child" class="blue-grey darken-3" :style="child_style" v-if="item.children">
            <nav-drawer-item
                v-for="child in item.children"
                :key="child.title"
                :item="child"
                :lv="lv + 1"
                :update_parent_height="append => update_height(append)"
            />
        </div>
    </div>
</template>

<script>


export default {
    name: "NavDrawerItem",
    props: ["item", "lv", "update_parent_height"],
    data () {
        return {
            child_height: 0,
            child_style: {
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease-out"
            },
            route_path: this.$route.path,
            expanded: false,
        }
    },
    mounted () {
        if (this.item.children) {
            this.child_style.transition = "max-height " + 0.1*this.item.children.length + "s ease-out";
        }
        
        if (this.$refs.child) {
            this.child_height = this.$refs.child.scrollHeight;
        }
        
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
        update_height (append_height) {
            if (this.$refs.child) {
                this.child_height = this.$refs.child.scrollHeight + append_height;
                this.child_style.maxHeight = this.child_height + "px";
            }
        },
        goto (path) {
            this.$router.push(path);
        },
        handleClick () {
            if (this.item.children) {
                this.expanded = !this.expanded;
                if (this.expanded) {
                    this.child_style.maxHeight = this.child_height + "px";
                    if (this.update_parent_height) {
                        this.update_parent_height(this.child_height);
                    }
                } else {
                    this.child_style.maxHeight = "0px";
                }
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