import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/Input'
import Output from '@/components/Output'
import Students from '@/components/Students'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/Input',
          name: 'Input',
          component: Input
      },
      {
          path: '/Output',
          name: 'Output',
          component: Output
      },
      {
          path: '/Students',
          name: 'Students',
          component: Students
      }
  ]
})
