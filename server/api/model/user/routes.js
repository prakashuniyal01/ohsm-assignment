const {crud_router} = require('../../../common/router');
const { userSchema } = require('./singup')


const userRouter = crud_router(userSchema);
module.exports = {userRouter}