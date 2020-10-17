import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Home",
    component: () =>
        import ("../views/Main.vue"),
    meta: { name: "内容管理" },
    children: [{
            path: "/categories/create",
            component: () =>
                import ("../views/createClass.vue"),
            meta: { name: "新建分类" }
        },
        {
            path: "/categories/create",
            component: () =>
                import ("../views/createClass.vue"),
            meta: { name: "分类列表" }
        }
    ]
}];

const router = new VueRouter({
    routes
});

export default router;