const { check, query } = require('express-validator')

const paramValidate = () => [
    query('type').isInt().withMessage('Type must be an integer'),
    query('type').notEmpty().withMessage('Type value is invalid'),
    query('table').isString().withMessage('Table value must be a string'),
    query('table').notEmpty().withMessage('Table value is invalid'),
    query('entity_id').isString().withMessage('Entity ID must be a string'),
    query('entity_id').notEmpty().withMessage('Entity ID is invalid'),
    check('action_id', 'Action ID is invalid').notEmpty(),
    check('action_id', 'Action ID must be a integer').isInt(),
    check('data', 'Data field is invalid').notEmpty(),
    check('data', 'Data field must be a object').isObject(),
    // check('data.old_data', 'Old data is required').notEmpty(),
    // check('data.new_data', 'New data is required').notEmpty(),
    // check('data.type', 'Data type is required').notEmpty(),
]


module.exports = paramValidate
