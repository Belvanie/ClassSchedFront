import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/admin',
    name: 'admin-home',
    redirect: 'admin/time-table',
    children: [
      {
        path: 'classrooms',
        name: 'management-classroom',
        redirect: 'classrooms/create',
        component: () => import("@/views/admin/management/ClassroomMangement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-classroom',
            component: () => import("@/views/admin/forms/CreateClassroom.vue"),
          },
          {
            path: 'update',
            name: 'update-classroom',
            component: () => import("@/views/admin/forms/UpdateClassroom.vue"),
          },
        ]
      },
      {
        path: 'reservations',
        name: 'management-reservation',
        component: () => import('@/views/admin/management/ReservationManagement.vue')
      },
      {
        path: 'courses',
        name: 'management-course',
        component: () => import("@/views/admin/management/CourseManagement.vue")
      },
      {
        path: 'departments',
        name: 'management-department',
        component: () => import("@/views/admin/management/DepartmentManagement.vue")
      },
      {
        path: 'filieres',
        name: 'management-filiere',
        component: () => import("@/views/admin/management/FiliereManagement.vue")
      },
      {
        path: 'levels',
        name: 'management-level',
        component: () => import("@/views/admin/management/LevelManagement.vue") 
      },
      {
        path: 'options',
        name: 'management-option',
        component: () => import("@/views/admin/management/OptionManagement.vue")
      },
      {
        path: 'time-table',
        name: 'time-table',
        component: () => import("@/views/admin/management/TimeTable.vue")
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('@/views/admin/authentication/LoginView.vue')
  },
  {
    path: '/admin/register',
    name: 'admin-register',
    component: () => import('@/views/admin/authentication/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
