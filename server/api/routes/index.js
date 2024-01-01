const { Router } = require("express");
const { StatusCodes } = require('http-status-codes');


const appRouter = Router();
 
appRouter.get('/heal', (req, res) => res.status(StatusCodes.OK).json('working'));


module.exports = {appRouter};