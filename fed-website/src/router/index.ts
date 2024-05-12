import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const isServer = typeof window === 'undefined'
const history = isServer
  ? createMemoryHistory(import.meta.env.BASE_URL)
  : createWebHistory(import.meta.env.BASE_URL)

const routerOptions = {
  history: history,
  routes
}

const router = createRouter(routerOptions)

export default router
