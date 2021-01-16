<template>
    <v-app>
        <v-main style="display:flex;align-items:center;" class="grey lighten-5">
            <v-card class="mx-auto" max-width="400">
                <v-card-title class="font-weight-bold mb-5"><v-spacer></v-spacer>系统登录<v-spacer></v-spacer></v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="account"
                        ref="input"
                        prepend-inner-icon="mdi-account"
                        label="账号"
                        outlined
                        dense
                        solo
                        :rules="[rules.account]"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="show_pswd ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show_pswd = !show_pswd"
                        class="mt-2"
                        prepend-inner-icon="mdi-lock"
                        label="密码"
                        outlined
                        dense
                        solo
                        :type="show_pswd ? 'text' : 'password'"
                        :rules="[rules.password]"
                    ></v-text-field>
                    <v-checkbox
                        v-model="remember_pswd"
                        label="记住账号密码"
                    >
                    </v-checkbox>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn
                            depressed
                            class="blue mb-5"
                            :width="input_width"
                            @click="login()"
                        >确定
                        </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            show_pswd: false,
            remember_pswd: true,
            account: "",
            password: "",
            input_width: null,
            rules: {
                account (value) {
                    if (!value) {
                        return "请输入账号"
                    }
                    return true;
                },
                password (value) {
                    if (!value) {
                        return "请输入密码"
                    }
                    return true;
                }
            } 
        }
    },
    methods: {
        login() {
            this.$router.push({path: "/home"});
        }
    },
    mounted () {
        this.input_width = this.$refs.input.$el.offsetWidth;
        this.account = this.$cookies.get("account");
        this.password = this.$cookies.get("password") ? this.$cookies.get("password") : "";
    }

}
</script>