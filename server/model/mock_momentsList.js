var Mock = require('mockjs');

var data = Mock.mock({
    msg:'ok',
    status: 0,
    'data|10': [
        {
            'username': '@word',
            'icon': '../public/images/icon-default.png',
            'id|+1': 1,
            'text': '@sentence',
            'picArr|1-4': ['@image(50x50)'],
            'comments|1-10': 5,
            'likes|1-50': 5
        }
    ]
})

// console.log(data);

module.exports = data;