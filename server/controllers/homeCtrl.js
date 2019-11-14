const mockData = require('../model/mockData');

const momentsData = mockData.data;
const hotData = mockData.rank;

var momentsList = (req, res)=>{
    if(momentsData){
        res.json(momentsData);
    }
    else{
        res.json({
            msg: 'Missing data...',
            status: -1,
            data: null
        })
    }
}

var hotIssues = (req, res)=>{
    if(hotData){
        res.json(hotData);
    }
    else{
        res.json({
            msg: 'Missing data...',
            status: -1,
            data: null
        })
    }
}

module.exports = {
    momentsList,
    hotIssues
}