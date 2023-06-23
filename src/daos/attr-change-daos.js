const baseDaos = require('./base-daos')
const attributeChangeModel = require('../models/attribute-change')

const AttributeChangeDaos = {
    insertData: async (payload) => {
        return await baseDaos.insertData(attributeChangeModel, payload)
    }
}

module.exports = AttributeChangeDaos
