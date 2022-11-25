const db =require("../models")

const User = db.user
const Roles = db.role

var checkDuplicateUsernameEmail = (req, res, next) =>{
    User.findOne({
        where :{
            username : req.body.username
        }
    })
    .then(user =>{
        if(user){
            res.status(400).send({
                message: "Failed Username already exists"
            })
            return 
        }
        User.findOne({
            where: {
                email : req.body.email
            }
        })
        .then(user => {
            if(user){
                res.status(400).send({
                    message: "Failed email already exists"
                })
                return 
            }

            next()
        })



    })
}

checkRolesExisted =(req,res, next) => {
    if(req.body.roles){
        for(let i =0; i< req.body.roles.length;i++){
            Roles.findOne({
                where :{
                    name : req.body.roles[i]
                }
            })
            .then(role =>{
                if(!role){
                    res.status(400).send({
                        message : "failed. roles does not exist " + req.body.roles[i]
                    })

                    return
                }

                next()
            })
        }
    }
}

const verifySignUp = {
    checkDuplicateUsernameEmail : checkDuplicateUsernameEmail,
    checkRolesExisted : checkRolesExisted
}

module.exports = verifySignUp