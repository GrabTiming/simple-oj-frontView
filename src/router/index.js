import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/common/LoginView.vue')
  },

  //------------------------- 学生 ------------------------------------------
  {
    path: '/student',
    name: 'studentIndex',
    component: () => import('../views/student/IndexView.vue'),
    children: [
      {
        path: 'myTest',
        name: 'myTest',
        component: () => import('../views/student/MyTest.vue')
      },
      {
        path: 'testDetail',
        name: 'testDetail',
        component: () => import('../views/student/TestDetail.vue')
      }
    ]
  },
    //------------------------- 老师 ------------------------------------------
  {
    path: '/teacher',
    name: 'teacherIndex',
    component: () => import('../views/teacher/IndexView.vue'),
    children: [
      {
        path: 'createExam',
        name: 'createExam',
        component: () => import('../views/teacher/exam/CreateExam.vue')
      },
      {
        path: 'examAnalysis',
        name: 'examAnalysis',
        component: () => import('../views/teacher/exam/ExamAnalysis.vue')
      },
      {
        path: 'examManagement',
        name: 'examManagement',
        component: () => import('../views/teacher/exam/ExamManagement.vue')
      },
      {
        path: 'createQuestion',
        name: 'createQuestion',
        component: () => import('../views/teacher/question/CreateQuestion.vue')
      },
      {
        path: 'questionManagement',
        name: 'questionManagement',
        component: () => import('../views/teacher/question/QuestionManagement.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
