# v-admin
```
A vue admin with vuetify
Yet another vue admin template base with vuetify
```

# PreView
```
https://v-admin.vercel.app/#/
```


## Project setup
```
npm install
@ -18,7 +24,33 @@ npm run serve
npm run build
```

### Lints and fixes files
### GetStart
```
由于是基于vuetify的UI框架, 所以 v-admin 在移动端的表现也很好.
后台的最基本的功能就是导航, v-admin的路由配置: config/routes.js,
重点说明一下, /home 下面的 children 默认就是侧边导航栏的内容, 可能
有些栏目我们并不想显示, 比如 `错误页面`，配置 hideInNav: true 则不会显示,
还有一个就是 权限 permission:['admin', 'editor'], 如果定义了该字段, 则只有
该数组里的人(对应 $store.state.me.role)才有权查看该页面, 没有定义的话则对所有人开放

后面的开发就是基于自身项目需求来开发页面内容
```
npm run lint

### Tips
```
如果有同学下载到本地运行的话, 可能在 登录的时候会报错,
那是因为该例子部署在 vercel 上, vercel 会同步部署 api (serverless), 本地则没有.
例子是为了展示 前台和后台的网络交互, 本地运行的时候 可以修改 views/Login.vue 中的 login 函数:
login () {
    this.$store.commit("login", {
        token: 'V-ADMIN-TOKEN',
        me: {
            id: "123456",
            nick: "your nick",
            role: "admin"
        }
    })
    this.$router.push({path: "/home"});
}

```
