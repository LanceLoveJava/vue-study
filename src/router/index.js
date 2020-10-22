import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/components/layout'

Vue.use(VueRouter)

export const constantRoutes = [
    {
        path: '/',
        component: layout,
        redirect: '/home',
        meta: { title: '基础' },
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home'),
                meta: { title: '首页' }
            }
        ]
    },
    {
        path: '/js',
        component: layout,
        meta: { title: 'javaScript' },
        children: []
    },
    {
        path: '/css',
        component: layout,
        meta: { title: 'CSS' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/css/Faq'),
                meta: { title: 'FAQ' }
            },
            {
                path: 'transition',
                component: () => import('@/views/css/transitionLq'),
                meta: { title: '过度' }
            },
            {
                path: 'menus',
                component: () => import('@/views/animation/shan'),
                meta: { title: '多级目录' },
                children: [
                    {
                        path: 'test',
                        component: () => import('@/views/Home'),
                        meta: { title: '测试' }
                    },
                    {
                        path: 'test2',
                        component: () => import('@/views/Home'),
                        meta: { title: '测试2' }
                    }
                ]
            }
        ]
    },
    {
        path: '/components',
        component: layout,
        meta: { title: '组件' },
        children: [
            {
                path: 'richText',
                component: () => import('@/views/components/richText'),
                meta: { title: '富文本' }
            }
        ]
    }
]

// 重置路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

const createRouter = () =>
    new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    })

const router = createRouter()

export default router
