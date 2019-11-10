export default {
  path: '/inform',
  component: ()=>import('../pages/inform/root/Inform'),
  children: [
    {
      // 互动
      path: 'interact',
      props: true,
      component: () => import('../pages/inform/interact/Interact')
    },
    {
      // 私信
      path: 'letter',
      props: true,
      component: () => import('../pages/inform/letter/Letter')
    }
  ]
}