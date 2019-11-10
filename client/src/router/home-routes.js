export default {
  path: '/home',
  component: ()=>import('../pages/home/root/Home'),
  children: [
    {
      // 轮播详情
      path: 'bannerDetail/:id',
      props: true,
      component: () => import('../pages/home/bannerDetail/BannerDetail')
    }
  ]
}