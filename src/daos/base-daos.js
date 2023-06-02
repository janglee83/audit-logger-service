const baseDaos = {
    insertData: async (model, data) => {
        const insertResponse = await model.create(data)
        return insertResponse
    }
}

module.exports = baseDaos
