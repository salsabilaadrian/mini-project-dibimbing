let express = require('express')
let authController = require('../controllers/authController')
let merchantController = require('../controllers/merchantController')
let productController = require('../controllers/productController')
let validateRegisterMiddlewares = require('../middlewares/validateRegisterMiddlewares')
let validateProductMiddlewares = require('../middlewares/validateProductMiddlewares')
let authMiddlewares = require('../middlewares/authMiddelwares')
let router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

//Auth
// Register
router.post('/register', validateRegisterMiddlewares, authController.register)
// Login
router.post('/login', authController.login)

// Merchant
// Delete Merchant Account
router.delete('/merchant/:id', authMiddlewares.isAuthenticate, merchantController.deleteMerchant)
// View List of Merchant Account
router.get('/merchant', authMiddlewares.isAuthenticate, merchantController.getMerchant)
//View Merchant Account by id
router.get('/merchant/:id', authMiddlewares.isAuthenticate, merchantController.getMerchantById)
// Update Merchant Account
router.put('/merchant/:id', authMiddlewares.isAuthenticate, merchantController.updateMerchant)

// Product
// Merchant can use merchant service if they are register and log in

// Create Product
router.post('/product', validateProductMiddlewares, authMiddlewares.isAuthenticate, productController.createProduct)
// Delete Product
router.delete('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.deleteProduct)
// Update Product
router.put('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.updateProduct)
// View List of Product
router.get('/product', authMiddlewares.isAuthenticate, productController.getAllProduct)
router.get('/merchant/:merchant_id/product', authMiddlewares.isAuthenticate, productController.getProduct)
// View Product by Id
router.get('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.getProductById)

module.exports = router