import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  // {
  //   path: '/lotteries',
  //   name: 'lotteries',
  //   component: () => import('../views/Lotteries.vue')
  // }
]
