import Vue from 'vue';
import { createRouter, createWebHistory } from '@ionic/vue-router'

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import Task from '../views/Task.vue';
import NewTask from '../views/NewTask.vue';
import NotFound from '../views/NotFound.vue';

const routerHistory = createWebHistory()

const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/profile',
			component: Profile
		},
		{
			path: '/tasks',
			component: Task
		},
		{
			path: '/new_tasks',
			component: NewTask
		},
		{
			path: '/:pathMatch(.*)*',
			component: NotFound
		}
	]
})

export default router
