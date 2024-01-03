import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// import store from '../store/index.js'

const routes = [{
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
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/school',
        name: 'school',
        component: () => import('../views/SchoolView.vue'),
        meta: {
            need2Login: 1,
            title: '学校查询|高考推荐数据库'
        }
    },
    {
        path: '/special',
        name: 'special',
        component: () => import('../views/SpecialView.vue'),
        meta: {
            need2Login: 1,
            title: '专业查询|高考推荐数据库'
        }
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: () => import('../views/RecommendView.vue'),
        meta: {
            need2Login: 1,
            title: '报考推荐|高考推荐数据库'
        }
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/MyView.vue'),
        meta: {
            title: '学校详情|高考推荐数据库'
        }
    },
    {
        path: '/analyse',
        name: 'collegeAnalysis',
        component: () => import('../views/CollegeAnalysis.vue'),
        meta: {
            title: '院校分析'
        },
    },
    {
        path: '/predict',
        name: 'scorePredict',
        component: () => import('../views/ScorePrediction.vue'),
        meta: {
            title: '分数预测'
        }
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
      component: () => import('../views/myProfile.vue'),
      meta: {
        title: 'profile'
      }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    //mode: 'history',
    routes
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