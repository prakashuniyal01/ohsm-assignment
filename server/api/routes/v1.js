const {Router} = require('express');
// const { taskRouter } = require('../model/todo/routes');
const { propartyRouter } = require('../model/property_setup/routes');
// const { singupRouter } =  require('../model/user/routes');
const { inventoryRouter } = require("../model/inventory/routes")



const v1Router = Router();

// v1Router.use('/tasks', taskRouter);
// property setup 
v1Router.use("/propertys", propartyRouter);
// user sign up route
// v1Router.use("/singup", singupRouter)

v1Router.use('/inventory', inventoryRouter)
module.exports = {v1Router};