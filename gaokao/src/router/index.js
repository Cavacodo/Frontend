import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// import store from '../store/index.js'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            title: '登录|高考推荐数据库'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: {
            title: '主页'
        }
    },
    {
        path: '/school',
        name: 'school',
        component: () => import('../views/SchoolView.vue'),
        meta: {
            need2Login: 1,
            title: '高校查询'
        },

    },
    {
        path: '/scoreSearch',
        name: 'scoreSearch',
        component: () => import('../views/ScoreSearch.vue'),
        meta: {
            need2Login: 1,
            title: '分数查询'
        }
    },
    {
        path: '/scorePrediction',
        name: 'scorePrediction',
        component: () => import('../views/ScorePrediction.vue'),
        meta: {
            need2Login: 1,
            title: '分数预测'
        }
    },
    {
        path: '/analyse',
        name: 'collegeAnalysis',
        component: () => import('../views/CollegeAnalysis.vue'),
        meta: {
            title: '院校统计'
        },
    },
    {
        path: '/recommend',
        name: 'reccommend',
        component: () => import('../views/RecommendView.vue'),
        meta: {
            title: '智能推荐'
        },
    },
    {
        path: '/bigdata',
        name: 'bigdata',
        component: () => import('../views/BigDataShow.vue'),
        meta: {
            title: '数据大屏'
        }
    },

    {
        path: '/TestMock',
        name: 'testTry',
        component: () => import('../views/TestMock.vue'),
        meta: {
            title: 'testTry'
        }
    },
    {
        path: '/myProfile',
        name: 'profile',
        component: () => import('../views/MyProfile.vue'),
        meta: {
            title: 'profile'
        }
    },
    {
        path: '/protocol',
        name: 'protocol',
        component: () => import('../views/ProtocolView.vue'),
        meta: {
            title: 'protocol'
        }
    },
    {
        path: '/schoolDetail',
        name: 'schoolDetail',
        component: () => import('../views/SchoolDetail.vue'),
        meta: {
            title: '学校详情'
        },
        children: [
            {
                path: 'general',
                name: 'general',
                component: () => import('../views/SchoolDetailGeneral.vue'),
                meta: {
                    title: '学校概况'
                }
            }, {
                path: 'score',
                name: 'score',
                component: () => import('../views/SchoolDetailScore.vue'),
                meta: {
                    title: '分数/计划'
                }
            }, {
                path: 'major',
                name: 'major',
                component: () => import('../views/SchoolDetailMajor.vue'),
                meta: {
                    title: '开设专业'
                }
            },

        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    //mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        // 滚动到顶部
        return { top: 0 }
    }
})


// router.beforeEach((to, from, next) => { //全局钩子函数
//   to.meta.title && (document.title = to.meta.title);
//   if (to.path === '/login') {
//     next();
//   } else {
//     if(localStorage.getItem('ms_username') === null){
//       alert("请登录！")
//       next('/login');
//     }else{
//       // next('/login');
//       next();
//     }
//   }
// });

export default router