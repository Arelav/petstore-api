'use strict';

const mock = require('./products_mock');
module.exports = {
    GetAllPets: GetAllPets
};

function GetAllPets(req, res, next) {
    res.json(mock);
}

