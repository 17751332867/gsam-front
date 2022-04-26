import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/Index'
import Login from '../components/Login'
import Cookies from 'js-cookie'
import IndexingAlgoritm from '../components/IndexingAlgoritm'
import IndexingSuccess from '../components/IndexingSuccess'
import MyIndexing from '../components/MyIndexing'
import BenchMark from '../components/BenchMark'
import BenchMarkSuccess from '../components/BenchMarkSuccess'
import MyBenchMark from '../components/MyBenchMark'
import BenchMarkDetails from '../components/BenchMarkDetails'
import CreateData from '../components/CreateData'
import FaFile from '../components/FaFile'
import Visualization from '../components/Visualization'

import VisualizationSuccess from '../components/VisualizationSuccess'
import MyVisualization from '../components/MyVisualization'
import PangenomeFile from '../components/PangenomeFile'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'myVisualization',
          name: 'myVisualization',
          component: MyVisualization
        },
        {
          path: 'visualizationSuccess',
          name: 'visualizationSuccess',
          component: VisualizationSuccess
        },
        {
          path: 'pangenomeFile',
          name: 'pangenomeFile',
          component: PangenomeFile
        },
        { path: 'index',
          name: 'index',
          component: Index
        }, {
          path: 'indexingAlgorithm',
          name: 'indexingAlgorithm',
          component: IndexingAlgoritm
        }, {
          path: 'indexingSuccess',
          name: 'indexingSuccess',
          component: IndexingSuccess
        }, {
          path: 'myIndexing',
          name: ' myIndexing',
          component: MyIndexing
        }, {
          path: 'benchMark',
          name: 'benchMark',
          component: BenchMark
        }, {
          path: 'benchMarkSuccess',
          name: 'benchMarkSuccess',
          component: BenchMarkSuccess
        }, {
          path: 'myBenchmark',
          name: ' myBenchmark',
          component: MyBenchMark
        },
        {
          path: 'benchMarkDetails',
          name: 'benchMarkDetails',
          component: BenchMarkDetails
        }, {
          path: 'createData',
          name: 'createData',
          component: CreateData
        }, {
          path: 'faFile',
          name: 'faFile',
          component: FaFile
        }, {
          path: 'visualization',
          name: 'visualization',
          component: Visualization
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let user = Cookies.get('user')
    if (user === undefined || user === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
