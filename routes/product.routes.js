
const productController = require("../controllers/product.controller")
const {requestValidator, authjwt} = require("../middlewares")
module.exports = function(app) {
    // insert the product
    app.post("/ecomm/api/v1/products",[requestValidator.validateProductRequest, authjwt.verifyToken], productController.create)
    // fetch the all product
    app.get("/ecomm/api/v1/products", productController.findAll)
    // fetch the product by Id
    app.get("/ecomm/api/v1/products/:id", productController.findOne)
    // update the product by id
    app.put("/ecomm/api/v1/products/:id", [requestValidator.validateProductRequest],productController.update)
    // delete the product by id
    app.delete("/ecomm/api/v1/products/:id",[authjwt.verifyToken], productController.delete)

    app.get("/ecomm/api/v1/categories/:categoryId/products", productController.getProductUnderCategory)
}