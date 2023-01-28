let models = require('../../models/index')

async function getProduct(req, res) {
    try {
        let merchant_id = req.params.merchant_id
        let result = await models.Product.findAll({
            attributes: ['id', 'name', 'quantity', 'price'],
            where: { merchant_id: merchant_id }
        })

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getAllProduct(req, res) {
    try {
        let result = await models.Product.findAll()
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getProductById(req, res) {
    try {
        let merchant_id = req.params.merchant_id
        let result = await models.Product.findOne({
            attributes: ['id', 'name', 'quantity', 'price'],
            where: { id: req.params.id, merchant_id: merchant_id }
        })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createProduct(req, res) {
    try {
        let createProduct = await models.Product.create(req.body)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateProduct(req, res) {
    try {
        let merchant_id = req.params.merchant_id
        let result = await models.Product.findOne({
            attributes: ['id', 'name', 'quantity', 'price'],
            where: { id: req.params.id, merchant_id: merchant_id }
        })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let updateUser = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteProduct(req, res) {
    try {
        let merchant_id = req.params.merchant_id
        let deleteProduct = await models.Product.destroy({ where: { id: req.params.id, merchant_id: merchant_id } })

        res.json({ message: "Product deleted", id: req.params.id })
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getProduct,
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}