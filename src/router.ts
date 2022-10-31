import  { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'
import  SwitchDemo from './components/SwitchDemo.vue'

const history =  createWebHashHistory()
export const router = createRouter({
  history:history,
  routes:[
    {path:'/',component:Home},
    {
      path:'/doc',
      component:Doc,
      children:[{
        path:"switch",component:SwitchDemo
      }]
    }
  ]
})
router.afterEach(() => {
  console.log("路由切换了");
});