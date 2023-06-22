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
    redirect: 'time-table',
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
        redirect: 'courses/create',
        component: () => import("@/views/admin/management/CourseManagement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-course',
            component: () => import("@/views/admin/forms/CreateCourse.vue")
          },
          {
            path: 'update',
            name: 'update-course',
            component: () => import("@/views/admin/forms/UpdateCourse.vue")
          },
        ]
      },
      {
        path: 'departments',
        name: 'management-department',
        redirect: 'departments/create',
        component: () => import("@/views/admin/management/DepartmentManagement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-department',
            component: () => import("@/views/admin/forms/CreateDepartment.vue")
          },
          {
            path: 'update',
            name: 'update-department',
            component: () => import("@/views/admin/forms/UpdateDepartment.vue")
          },
        ]
      },
      {
        path: 'filieres',
        name: 'management-filiere',
        redirect: 'filieres/create',
        component: () => import("@/views/admin/management/FiliereManagement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-filiere',
            component: () => import("@/views/admin/forms/CreateFiliere.vue")
          },
          {
            path: 'update',
            name: 'update-filiere',
            component: () => import("@/views/admin/forms/UpdateFiliere.vue")
          },
        ]
      },
      {
        path: 'levels',
        name: 'management-level',
        redirect: 'levels/create',
        component: () => import("@/views/admin/management/LevelManagement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-level',
            component: () => import("@/views/admin/forms/CreateLevel.vue")
          },
          {
            path: 'update',
            name: 'update-level',
            component: () => import("@/views/admin/forms/UpdateLevel.vue")
          },
        ]
      },
      {
        path: 'options',
        name: 'management-option',
        redirect: 'options/create',
        component: () => import("@/views/admin/management/OptionManagement.vue"),
        children: [
          {
            path: 'create',
            name: 'create-option',
            component: () => import("@/views/admin/forms/CreateOption.vue")
          },
          {
            path: 'update',
            name: 'update-option',
            component: () => import("@/views/admin/forms/UpdateOption.vue")
          },
        ]
      },
      {
        path: 'time-table',
        name: 'time-table',
        component: () => import("@/views/admin/management/TimeTable.vue"),
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
