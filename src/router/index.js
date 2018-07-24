import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Simple from '@/view/simple/index'
import Message from '@/view/simple/message'
import VBind from '@/view/simple/vbind'
import VIf from '@/view/simple/vif'
import VFor from '@/view/simple/vfor'
import ReverseMessage from '@/view/simple/reverseMessage'
import VModel from '@/view/simple/vmodel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/simple',
      name: 'Simple',
      component: Simple
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/vbind',
      name: 'VBind',
      component: VBind
    },
    {
      path: '/vif',
      name: 'VIf',
      component: VIf
    },
    {
      path: '/vfor',
      name: 'VFor',
      component: VFor
    },
    {
      path: '/reverseMessage',
      name: 'ReverseMessage',
      component: ReverseMessage
    },
    {
      path: '/vmodel',
      name: 'VModel',
      component: VModel
    }
  ]
})
