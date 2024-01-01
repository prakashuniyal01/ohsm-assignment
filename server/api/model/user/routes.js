const {crud_router} = require('../../../common/router');
const { userSchema } = require('./singup')


const signupRouter = crud_router( userSchema );
module.exports = { signupRouter }