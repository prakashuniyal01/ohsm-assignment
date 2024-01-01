require('dotenv').config();

const {app} = require('./api/app');
const { LOGGER } = require('./common/logger')
const { monogdb_connection } = require('./api/db/mongo')

const PORT = process.env.PORT;

monogdb_connection();


app.listen(PORT, ()=>[
    LOGGER.info(`Server is running on port ${PORT}`),
])