const baseDaos = require('./base-daos')
const userModel = require('../models/user')

const userDaos = {
    insertData: async (data) => {
        return baseDaos.insertData(userModel, data)
    }
}

module.exports = userDaos
