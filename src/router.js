import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Chi_sono from './pages/Chi_sono.vue'


const router = createRouter({
	history: createWebHistory(),
		routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
        {
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio,
		},
        {
			path: '/chi_sono',
			name: 'chi_sono',
			component: Chi_sono,
		}
	],
})

export { router }
