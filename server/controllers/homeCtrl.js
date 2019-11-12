const momentsData = require('../model/mock_momentsList');

var momentsList = async (req, res)=>{
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

module.exports = {
    momentsList,
}