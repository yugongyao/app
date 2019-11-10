export default {
  path: '/mine',
  component: () => import('../pages/mine/root/Mine'),
  children: [{
      // 个人中心
      path: 'center',
      props: true,
      component: () => import('../pages/mine/center/Center')
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
  ]
}