const {crud_router} = require('../../../common/router');
const { inventoryModel } = require('./inventry');

const inventoryRouter = crud_router(inventoryModel);
module.exports = { inventoryRouter }