import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassroomManagement from '../views/admin/management/ClassroomMangement.vue'
import CourseManagement from '../views/admin/management/CourseManagement.vue'
import DepartmentManagement from '../views/admin/management/DepartmentManagement.vue'
import FiliereManagement from '../views/admin/management/FiliereManagement.vue'
import LevelManagement from '../views/admin/management/LevelManagement.vue'
import OptionManagement from '../views/admin/management/OptionManagement.vue'
import TimeTable from '../views/admin/management/TimeTable.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin-home',
    children: [
      {
        path: 'classrooms',
        name: 'management-classroom',
        redirect: 'admin/classrooms/create',
        component: ClassroomManagement,
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
        component: CourseManagement
      },
      {
        path: 'departments',
        name: 'management-department',
        component: DepartmentManagement
      },
      {
        path: 'filieres',
        name: 'management-filiere',
        component: FiliereManagement
      },
      {
        path: 'levels',
        name: 'management-level',
        component: LevelManagement
      },
      {
        path: 'options',
        name: 'management-option',
        component: OptionManagement
      },
      {
        path: 'time-table',
        name: 'time-table',
        component: TimeTable
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
