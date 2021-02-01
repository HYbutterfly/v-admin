<template>
    <router-view/>
</template>


<script>
export default {
    mounted () {
        this.$router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.needLogined)) {
                if (!this.$store.state.token) {
                    next({
                        path: '/',
                        query: { redirect: to.fullPath }
                    })
                } else {
                    next();
                }
            } else {
                next();
            }
        })
    }
}
</script>