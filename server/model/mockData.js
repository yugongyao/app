var Mock = require('mockjs');

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#'+n.slice(0, 6);
};

var refresh = function(){
    return Mock.mock({
        'msg':'ok',
        'status': 0,
        "data|5": [
            {
                'username': '@cname',
                'icon': '/assets/icon-default.png',
                'id|+1': 1,
                'text': '@csentence',
                'picArr|1-4': ["@image(50x50,"+randomHexColorCode()+",)"],
                'time': '@datetime("MM-dd HH:mm")',
                'comments|1-10': 5,
                'likes|1-50': 5
            }
        ]
    })
}

var rank = function(){
    return Mock.mock({
        msg:'ok',
        status: 0,
        'data|4': [
            {
                'title': '@cword(1,2)',
                'rank|+1': 1,
            }
        ]
    })
}

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
    refresh,
    rank,
    starUsers
};
