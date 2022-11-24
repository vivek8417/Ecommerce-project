//const { Sequelize, sequelize } = require(".");

 module.exports = (sequelize, Sequelize)=>{

   let Category = sequelize.define("category",{
    name:{
        type : Sequelize.STRING,
        allowNull : false
    },
    description :{
        type: Sequelize.STRING
    }
},{
    tableName: "categories"
})


// automatic col id , createAt and updatedAt will be created
return Category;
}