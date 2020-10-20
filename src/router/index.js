import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/components/layout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    meta: { title: "首页" },
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
      }
    ]
  },
  {
    path: "/css",
    component: layout,
    meta: { title: "CSS" },
    children: [
      {
        path: "zhuang",
        component: () => import("@/views/animation/shan"),
        meta: { title: "动画" }
      }
    ]
  }
];

// 重置路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export default router;
