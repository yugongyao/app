const mockData = require('../model/mockData');

const refresh = mockData.refresh
const hotData = mockData.rank;

var momentsList = (req, res)=>{
    let result = refresh();
    if(result){
        res.json(result);
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
    let result = hotData();
    if(result){
        res.json(result);
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