let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
let models = require('../../models/index')

async function login(req, res) {
    try {
        let result = await models.Merchant.findOne({ where: { email: req.body.email } })
        if (result.length < 1) {
            res.send("Merchant not found")
        }

        let password = req.body.password;
        let match = await bcrypt.compare(password, result.password);
        if (!match) {
            res.send("Wrong Email or Password");
        }

        let payload = {
            id: result.id,
            name: result.name,
            email: result.email
        }

        let token = jwt.sign(payload, 'secret')

        res.json({ message: "login Susccess", access_token: token })
    } catch (error) {
        res.json(error)
    }
}

async function register(req, res) {
    try {
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password, salt)
        req.body.password = password

        await models.Merchant.create(req.body)

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    login,
    register
}