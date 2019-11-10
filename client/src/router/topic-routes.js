export default {
  path: '/topic',
  component: ()=>import('../pages/topic/root/Topic'),
  children: [
    {
      // 话题详情
      path: 'topicDetail/:id',
      props: true,
      component: () => import('../pages/topic/topic-detail/TopicDetail')
    }
  ]
}