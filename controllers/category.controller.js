
const db = require("../models")

const Category= db.category

// post: create abd save a new category

exports.create = (req, res) =>{
    let category= {
        name : req.body.name,
        description : req.body.description
    }
    
    Category.create(category)
    .then(category=>{
        console.log(`category got successfully created`)
        res.status(200).send(category)
    })
    .catch( err=>
        {
            console.log("Issue is in inserting the category ")
            res.status(200).send("Issue is in inserting the category ")
        })
}

// GET: get the list of all categories
exports.findAll = (req, res)=>{

    Category.findAll()
    .then(data =>{
        console.log("Category successfully fetched from datat base")
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send("Some error occure retreiving the category")
    })
}

exports.findOne = (req, res) =>{

    const categoryId= req.params.id;

    Category.findByPk(categoryId)
    .then(category =>{

        //if a user in a ID which is not present in the db
        if(!category){
            return res.status(400).send("please enter the valid category ID")

        }
        res.status(200).send(category)
    })
    .catch(err=> {
        res.status(500).send(" Some error occures while reteiving the categroy")

    })
}

exports.delete= (req, res) =>{
    const categoryId= req.params.id;

    Category.destroy({

        where :{
            id : categoryId
        }
    })
    .then(result =>{
        res.status(200).send("Successfully deleted the category")
    })
    .catch(err =>{
        res.status(500).send(" Some error occured while deleteing gthe category")
    })
}

exports.update =(req, res )=>
{
    const categoryId = req.params.id
    Category.update(req.body,{
        where:{
            id : categoryId
        }
    })
    .then(num =>{
        if(num==1){
            res.send("Updation successfully")
        }else{
            res.send("Could not update")
        }
    })
    .catch(err =>{
        res.status(500).send("Some error occureed while updating the category")
    })
}