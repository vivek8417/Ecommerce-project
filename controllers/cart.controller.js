

const db = require("../models");
const Product = db.product;
const Cart = db.cart
const Op= db.Sequelize.Op

exports.create= (req, res)=>{
    const cart = {
        userId : req.userId
    }

    Cart.create(cart)
    .then(cart=> {
        res.status(200).send(cart)
    })
    .catch(err =>{
        res.status(500).send({
            message : "Some internal server issue happned"
        })
    })
}

exports.update = (req, res) =>{

    let cartId = req.params.id;
    let oldCost =0;  // cost of the items already existing in the cart

    Cart.findByPk(cartId)
    .then(cart =>{
        oldCost = cart.cost;

        Product.findAll({
            where :{
                id : req.body.productIds
            }
        })
        .then(items => {
            cart.setProducts(items) // add those products to the cart product table
            .then(()=>{

                var NewCost= 0;
                cart.getProducts()
                .then(products =>{

                    //add the cost ot all the items in the cart

                    for(i=0; i<products.length;i++){
                        NewCost= NewCost + products[i].cost
                    }
                    // updating the final cost in the cart table.
                    Cart.update({cost : oldCost + NewCost}, {where : {id : cartId}})

                    res.status(200).send({
                        message : "Successfully added items to the cart"
                    })
                })
            })
        })
        .catch(err =>{
            res.status(500).send("Some internal error happned while fetching the product details")

        })
    })
    .catch(err=>{
            res.status(500).send("Some internal error happned while fetching the carts details")
           
    })
}