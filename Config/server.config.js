
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

module.exports = {
    PORT : process.env.PORT
}

//dev
// process .env.NODE_ENV -> dev

//prod
// process .env.NODE_ENV -> production

// it is case senstive


// dotenv -> npm module

// dotenv basically load .env file