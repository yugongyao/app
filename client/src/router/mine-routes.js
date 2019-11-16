export default {
  path: '/mine',
  component: () => import('../pages/mine/root/Mine'),
  children: [{
      // 个人中心
      path: 'center',
      props: true,
      component: () => import('../pages/mine/center/Center'),
      children:[
        {
          //编辑资料
          path:'edit',
          props:true,
          component: () => import('../pages/mine/center/edit/Edit'),
        },
      ]
    },
    {
      // 收藏
      path: 'collect',
      props: true,
      component: () => import('../pages/mine/collect/Collect')
    },
    {
      // 关注
      path: 'follow',
      props: true,
      component: () => import('../pages/mine/follow/Follow')
    },
    {
      // 意见反馈
      path: 'feedback',
      props: true,
      component: () => import('../pages/mine/feedback/Feedback')
    },
    {
      // 帮助
      path: 'help',
      props: true,
      component: () => import('../pages/mine/help/Help')
    },
    {
      // 投稿
      path: 'contribute',
      props: true,
      component: () => import('../pages/mine/contribute/Contribute')
    },
    {
      // vip
      path: 'vip',
      props: true,
      component: () => import('../pages/mine/vip/Vip')
    },
    {
      // 设置中心
      path: 'set',
      props: true,
      component: () => import('../pages/mine/set/Set')
    }
  ]
}