// 用户表的操作

const mongoose = require('mongoose');

// 创建表
const User = mongoose.model('user', new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}))

// 增
module.exports.add = async (username, email, password)=>{
    var result1 = await User.findOne({email});
    var result2 = await User.findOne({username});
    if ( result1 || result2 ){
        throw new Error('该账号已存在');
    } else {
        // 创建
        const user = new User({username, email, password});
        // 保存
        return await user.save();
    }
}


// 查询
module.exports.findByEmail = async (email)=>{
    return await User.findOne({email});
}

module.exports.findByUsername = async (username)=>{
    return await User.findOne({username});
}

module.exports.findByEmailAndPsd = async (email, password)=>{
    return await User.findOne({email, password});
}
