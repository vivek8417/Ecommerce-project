

const db = require("../models")
const Category = db.category;

const validateCategoryRequest =(req, res, next) =>{
    if(!req.body.name) {
        res.status(400).send("Name of the category can't be empty")
    }
    next();
}

const validateProductRequest =(req, res, next)=>{

    //{name, description, categoryID}

    //1. Product name passed is not null
    // 2. Product have a category ID passed to it all the time

    // where the product name is not present in the request body
    if(!req.body.name){
        res.status(400).send("Name of the product can't beempty")
        return;
    }
    if(req.body.categoryId){
        Category.findByPk(req.body.categoryId)
        .then(category =>{
            if(!category){
                res.status(400).send("Category id is not available")
                return;
            }

            next();

        })
        .catch(err =>{
            res.status(500).send("Some internal error while fetching the product details")
        })
    }else{
    
        // Category ID is not present in the request body
        res.status(400).send("Category id can not be null")
    }
}

module.exports ={
    validateCategoryRequest : validateCategoryRequest,
    validateProductRequest : validateProductRequest
}