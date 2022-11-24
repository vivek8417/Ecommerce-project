

const db = require("../models")    // index.js file

const Product = db.product;

const Op = db.Sequelize.Op;

exports.create = (req, res)=>{
    let product ={
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
        categoryId : req.body.categoryId
    }
    Product.create(product)
    .then( product => {
        console.log("date got successfully instered")
        res.status(200).send("inserted successfully\n" + product)
    })
    .catch(err =>{
        res.status(500).send("Error while instering the product details")
    })

}

exports.findAll = (req, res) =>{
    let productName = req.query.name;
    let minCost = req.queryminCost;  // 80000
    let maxCost = req.querymaxCost; // 90000

    // get all the product
    // select * from product where cost >= 80000
    let promise;
    if(productName){
        Product.findAll({
            where:{
                name : productName
            }
        })

    }else if(minCost && maxCost){
        promise = Product.findAll({
            where : {
                cost : {
                    [Op.gte] : minCost,
                    [Op.lte] : maxCost
                }
            }
        })
        
    }else if(minCost){
        promise =Product.findAll({
            where : {
                cost: {
                    [Op.gte] : minCost
                }
            }
        })
    }else if(maxCost){
        promise = Product.findAll({
            where: {
                cost :{
                   [Op.lte] : maxCost 
                }
            }
        })
    }else{

        promise = Product.findAll()
    }


    Product.findAll()
    .then(data => {
        console.log(" Data has been fetched successfully")
        res.status(200).send(data)
    })
    .catch(err =>{
        res.status(500).send("Error while fetching the product details")
    })

}

exports.findOne = (req, res) =>{
    let id =req.params.id;

    Product.findByPk(id)
    .then(data=>
        {
            if(!data){
                res.status(400).send("please enter the correct ID")
            }else{
            console.log(" Products has been fetched successfully")
            res.status(200).send(data)
        }
        })
        .catch(err=>{
            res.status(500).send("Error while fetching the product details")
        })
}

exports.update = (req, res) =>{
    let productId= req.params.id;

    Product.update(req.body,{
        where:{
            id : productId
        }
    } )

    .then(num =>{
        if(num==1){
            res.send("Updation successfully")
        }else{
            res.send("Could not update")
        }
    })
    .catch(err =>{
        console.log(" error while updating the product details")
        res.status(500).send("error while updating the product details")
    })
}

exports.delete= (req, res) =>{
    const productId= req.params.id;

    Product.destroy({

        where :{
            id : productId
        }
    })
    .then(result =>{
        if(!result){
            res.send("please enter the correct ID")
        }else{
            res.status(200).send("Successfully deleted the product")
        }
        
    })
    .catch(err =>{
        res.status(500).send(" Some error occured while deleteing gthe product")
    })
}

exports.getProductUnderCategory= (req, res)=>{

    let categoryID= req.params.categoryId;

    Product.findAll({
        where:{
            categoryId : categoryID
        }
    })
    .then(data => {
        console.log(" Data has been fetched successfully")
        res.status(200).send(data)
        
    })
    .catch(err =>{
        res.status(500).send(" Some error occured while fetching the product")
    })


}