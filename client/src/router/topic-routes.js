export default {
  path: '/topic',
  components:{
    topic:() => import('../pages/topic/root/Topic')
  },
  redirect: '/topic/today',
  children: [{
      // 今日话题
      path:'today',
      props:true,
      components:{
        today: () => import('../pages/topic/today/Today')
      }
    },
    {
      // 今日话题
      path:'past',
      props:true,
      components:{
        past: () => import('../pages/topic/past/Past')
      }
    },
    {
      // 话题详情
      path: 'topicDetail/:topicid',
      props: true,
      components: {
        topicDetail:() => import('../pages/topic/topic-detail/TopicDetail')
      }
    }
  ]
}