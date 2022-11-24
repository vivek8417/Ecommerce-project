
const express= require("express")
const serverConfig = require('./Config/server.config')

const bodyparser = require("body-parser")

// initialize the express
const app = express()

// middleware -> bodyparser

/**
 * using the body parser middle ware
 * used for parsing the request
 * parsing the request of type json and convert to the object
 */

app.use(bodyparser.json())
 /**
  * initising database
  */
const db =require("./models")
const Role= db.role;
Category = db.category
db.sequelize.sync()
.then(()=>
{
    console.log('Database Sysnced')
    //init()
})

function init(){
    Role.create({
        id :1,
        name : "user"
    })
    Role.create({
        id :2,
        name :"admin"
    })
}

require('./routes/category.routes')(app)
require('./routes/product.routes')(app)
require('./routes/auth.routes')(app)
app.listen(serverConfig.PORT, ()=>{
    console.log(serverConfig.PORT)
    console.log("Application started")
});