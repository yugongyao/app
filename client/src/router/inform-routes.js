export default {
  path: '/inform',
  components: {
    inform:() => import('../pages/inform/root/Inform'),
  },
  redirect: "/inform/interact",
  children: [{
      // 互动
      path: 'interact',
      props: true,
      components: {
        interact: () => import('../pages/inform/interact/Interact')
      }
    },

    {
      // 私信
      path: 'letter',
      props: true,
      components: {
        letter: () => import('../pages/inform/letter/Letter')
      },
    },
    {
      path: "detail/:workid",
      props: true,
      component: () => import('../pages/inform/detail/Works')
    },
    {
      path: "detail/:workid/:intid",
      props: true,
      component: () => import('../pages/inform/detail/Detail')
    },
    {
      path: 'chat/:userid',
      props: true,
      component: () => import('../pages/inform/chat/Chat')
    }
  ]
}