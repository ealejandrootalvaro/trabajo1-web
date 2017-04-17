import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Horarios from '@/components/Horarios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
    	path: '/horarios',
        component: Horarios
    }





  ]
})
