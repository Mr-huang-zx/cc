import mlsk from './mlsk'
import userDocument from './userDocument'
import adDocument from './adDocument'
import proxyDocument from './proxyDocument'
import taskDocument from './taskDocument'
import systemDocument from './systemDocument'
import systemControl from './systemControl'
import systemTool from './systemTool'
const secondRouterView = 'views/index.vue'
export default [
    {
        path:"/home",
        meta:{title:"首页"},
        component:()=>import('@/views/home/index.vue'),
        
    },
    {
        path:"/mlsk",
        meta:{title:"米乐试客"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...mlsk
        ],
    },
    {
        path:"/userDocument",
        meta:{title:"用户管理"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...userDocument
        ],
    },
    {
        path:"/adDocument",
        meta:{title:"广告主管理"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...adDocument
        ],
    },
    {
        path:"/proxyDocument",
        meta:{title:"代理商管理"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...proxyDocument
        ],
    },
    {
        path:"/taskDocument",
        meta:{title:"任务管理"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...taskDocument
        ],
    },
    {
        path:"/systemDocument",
        meta:{title:"系统管理"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...systemDocument
        ],
    },
    {
        path:"/systemControl",
        meta:{title:"系统监控"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...systemControl
        ],
    },
    {
        path:"/systemTool",
        meta:{title:"系统工具"},
        component:()=>import(`@/${secondRouterView}`),
        children:[
            ...systemTool
        ],
    },
]