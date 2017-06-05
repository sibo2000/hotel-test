const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

router.get('/', function(req, res, next){
        
    dbQuery = buildFilters(req.query);
    dbSort = buildSort(req.query.sort);
    
    Hotel.find(dbQuery)
        .sort(dbSort)
        .limit(100)
        .exec(function(err, hotels){
            if(err) {
                return res.status(500).json({
                    title: 'An Error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: hotels
            })
        })
});

module.exports = router;

const buildSort = function (query) {
    let queryString;
    if(query){
        queryString = query.replace(/,/g," ");
    }
    return queryString;
}


const buildFilters = function (query) {
    let queryString = {};
    if(query.name) {
        queryString.$text = { $search: query.name }
    }
    if(query.stars) {
        queryString.Stars = {$gte: query.stars}
    }
    if(query.userrating) {
        queryString.UserRating = {$gte: query.userrating}
    }
    if(query.mincost) {
        queryString.MinCost = {$gte: query.mincost}
    }
    return queryString;
}
