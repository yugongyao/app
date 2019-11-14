var Mock = require('mockjs');

var data = Mock.mock({
    msg:'ok',
    status: 0,
    'data|5': [
        {
            'username': '@word',
            'icon': '/assets/icon-default.png',
            'id|+1': 1,
            'text': '@csentence',
            'picArr|1-4': ['@image(50x50)'],
            'time': '@datetime("MM-dd HH:mm")',
            'comments|1-10': 5,
            'likes|1-50': 5
        }
    ]
})

var rank = Mock.mock({
    msg:'ok',
    status: 0,
    'data|4': [
        {
            'title': '@cword(1,3)',
            'bg|1': ['/assets/pic1.jpg','/assets/pic2.jpg','/assets/pic3.jpg','/assets/pic4.jpg'],
            'rank|+1': 1,
        }
    ]
})

var starUsers = Mock.mock({
    msg:'ok',
    status: 0,
    'data|9': [
        {
            'username': '@word',
            'icon': '/assets/icon-default.png',
            'id|+1': 1,
        }
    ]
})


module.exports = {
    data,
    rank,
    starUsers
};