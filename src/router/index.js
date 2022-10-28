import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import toDoListView1 from "../views/ToDoListView1.vue";
import ToDoListView2 from "../views/ToDoListView2.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
        [{
            path: '/',
            name: 'home',
            component: HomeView
        }, {
            path: '/todo-v1',
            name: 'todo-v1',
            component: toDoListView1
        }, {
            path: '/todo-v2',
            name: 'todo-v2',
            component: ToDoListView2
        }, {
            path: '/about',
            name: 'about', // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }]
})

export default router
