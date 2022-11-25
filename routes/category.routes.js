


const categoryController= require("../controllers/category.controller.js")

const { requestValidator, authjwt} =require("../middlewares/index.js")

module.exports = function(app){
     // Routs to add a category

     app.post("/ecomm/api/v1/catgories",[ requestValidator.validateCategoryRequest, authjwt.verifyToken],categoryController.create)

     // Routes to get all categories
     app.get("/ecomm/api/v1/catgories", categoryController.findAll)

     app.get("/ecomm/api/v1/categories/:id", categoryController.findOne)

     app.delete("/ecomm/api/v1/categories/:id", [authjwt.verifyToken],categoryController.delete)

     app.put("/ecomm/api/v1/categories/:id",[ requestValidator.validateCategoryRequest], categoryController.update)

 }

