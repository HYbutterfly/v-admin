import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        title: "首页",
        component: () => import('@/views/Home.vue'),
        default: () => import('@/components/Dashboard.vue'),
        children: [
            {
                path: "",
                title: "首页",
                icon: "mdi-home",
                component: () => import('@/views/Home.vue'),
                default: () => import('@/components/Dashboard.vue'),
            },
            {
                path: "nesting",
                title: "嵌套",
                icon: "mdi-layers",
                children: [
                    {
                        path: "menu1",
                        title: "菜单1",
                        component: () => import('@/components/nesting/Menu1.vue'),
                    },
                    {
                        path: "menu2",
                        title: "菜单2",
                        children: [
                            {
                                path: "1",
                                title: "选项1",
                                component: () => import('@/components/nesting/Menu2_1.vue'),
                            },
                            {
                                path: "2",
                                title: "选项2",
                                component: () => import('@/components/nesting/Menu2_2.vue'),
                            }, 
                        ]
                    },
                    {
                        path: "menu3",
                        title: "菜单3",
                        component: () => import('@/components/nesting/Menu3.vue'),
                    },
                ]
            },
            {
                path: 'error',
                title: '错误页面',
                icon: 'mdi-emoticon-sad-outline',
                children: [
                    {
                        path: "401",
                        title: "401",
                        component: () => import('@/components/error/401.vue'),
                    },
                    {
                        path: "404",
                        title: "404",
                        component: () => import('@/components/error/404.vue'),
                    },   
                ]
            },
            {
                path: 'my',
                title: '我的',
                icon: 'mdi-account',
                component: () => import('@/components/My.vue'),
            },
            {
                permission: ['admin'],
                path: 'users',
                title: '用户管理',
                icon: 'mdi-account-group-outline',
                component: () => import('@/components/Users.vue'),
            }
        ]
    }
]

function parse(list, f, default_params) {
    list.forEach(route => {
        var params = f(route, default_params);
        if (route.children) {
            parse(route.children, f, params)
        }
    })
}


export let vue_routes = [];
export let navigator = {};

parse(routes, (route, root)=> {
    let fullpath = root != null? root.meta.fullpath + '/' + route.path: route.path;

    navigator[fullpath] = {
        title: route.title,
        is_link: route.component != null,
        is_root: route.children != null,
    };

    if (!route.component) {
        return {
            meta : { fullpath: fullpath },
            xpath: root.xpath != null? root.xpath + '/' + route.path: route.path,
            children: root.children
        }
    }

    let real_route = {
        path: route.path,
        component: route.component,
        meta: { permission: route.permission, fullpath: fullpath }
    }

    if (root && root.xpath) {
        real_route.path = root.xpath + '/' + route.path;
    }

    if (route.children || route.default) {
        real_route.children = [];
    }

    if (route.default) {
        real_route.children.push({
            path: '',
            component: route.default
        })
    }

    if (root) {
        root.children.push(real_route);
    } else {
        vue_routes.push(real_route);
    }
   
    return real_route;
})

export let drawers = [];

parse(routes[1].children, (route, root) => {
    let path = route.path =="" ? root.path : root.path + '/' + route.path;
    let drawer = {
        path: path,
        title: route.title,
        icon: route.icon,
        permission: route.permission,
        children: route.children != null ? []: null
    }

    root.children.push(drawer);
    
    return drawer
}, {path: '/home', children: drawers})






// console.log(navigator);
// console.log(vue_routes);
// console.log(drawers);




export default routes