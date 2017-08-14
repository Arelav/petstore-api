'use strict';

const mock = require('../mocks/products_mock');

module.exports = {
    GetAllPets: GetAllPets
};

function GetAllPets(req, res) {
    console.log('get all pets controller');
    res.json(mock);
}