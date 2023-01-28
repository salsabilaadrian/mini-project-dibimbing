let models = require('../../models/index')

async function getMerchant(req, res) {
    try {
        let result = await models.Merchant.findAll()
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getMerchantById(req, res) {
    try {
        let result = await models.Merchant.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function updateMerchant(req, res) {
    try {
        let result = await models.Merchant.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let updateUser = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteMerchant(req, res) {
    try {
        let deleteMerchant = await models.Merchant.destroy({ where: { id: req.params.id } })

        res.json({ message: "Merchant deleted", id: req.params.id })
    } catch (errror) {
        res.json(error)
    }
}

module.exports = {
    getMerchant,
    getMerchantById,
    updateMerchant,
    deleteMerchant
}