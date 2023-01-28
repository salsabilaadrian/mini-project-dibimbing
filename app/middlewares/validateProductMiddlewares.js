const { check, validationResult } = require('express-validator');

const rules = [
    check('merchant_id')
        .notEmpty().withMessage('Merchant id must be fiiled'),
    check('name')
        .isLength({ min: 3, max: 50 }).withMessage("Name lenght must be minimal 3 and maximal 50 character"),
    check('quantity')
        .notEmpty().withMessage('Quantity doesnt empty!')
        .isInt({ min: 1 }).withMessage('Minimal quantity is 1'),
    check('price')
        .notEmpty().withMessage('Price doesnt empty!')
        .isInt({ min: 10000 }).withMessage('Minimal price is 10000')
];

const validate = [
    rules,
    (req, res, next) => {
        const errorFormatter = ({ msg }) => {
            return `${msg}`
        }

        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.json({ errors: result.array() })
        }
        next();
    }
];

module.exports = validate