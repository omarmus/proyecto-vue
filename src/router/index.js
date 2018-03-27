import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Empresas from '@/components/empresas/Empresas'
import AgregarEmpresa from '@/components/empresas/AgregarEmpresa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/empresas',
      name: 'Empresas',
      component: Empresas
    },
    {
      path: '/agregarEmpresa',
      name: 'AgregarEmpresa',
      component: AgregarEmpresa
    }
  ]
})
