const config = require("../Config/db.config")

const Sequelize = require("sequelize")

const seq = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host : config.HOST,
        dialect : config.dialect
    }
)

const db ={}

db.Sequelize = Sequelize
db.sequelize = seq
db.category = require("./Category.model")(db.sequelize, Sequelize)
db.product = require("./product.model")(db.sequelize, Sequelize)
db.user = require("./user.model.js")(db.sequelize, db.Sequelize)
db.role = require("./role.model.js")(db.sequelize, db.Sequelize)

// one to many relationship
db.category.hasMany(db.product)

// establishing relation ship between user and role : Many to mnay

// User to Role -> one to many
db.user.belongsToMany(db.role,{
    through : "user_roles",
    foreignKey : "userId"
})

// Role to user -> one to many
db.role.belongsToMany(db.user,{
    through: "user_roles",
    foreignKey: "roleId"
})

module.exports =db
