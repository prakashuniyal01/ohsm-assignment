const {crud_router} = require('../../../common/router');
const { propartyModel } = require('./propertyModels');

const propartyRouter = crud_router( propartyModel );
module.exports = { propartyRouter }