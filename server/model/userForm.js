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
    },
    birthday: {
        type: String,
        required: false,
    },
    sexID: {
        type: String,
        default: "男"
    },
    desc: {
        type: String,
        required: false
    },
    icon:{
        type:String,
        default: '/assets/icon.png'
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


// 更新
module.exports.update = async ( _id, username, sexID, birthday, desc)=>{
    
    var result = await User.findById(_id);
    if(!result){
        throw new Error('账号不存在或数据库出错');
    } else{
        return User.findByIdAndUpdate(_id, {username, sexID, birthday, desc})
    }
    
}
