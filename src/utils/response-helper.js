const convertResponse = async (status, data, response) => {
    response.status(status).json(data)
}

module.exports = convertResponse
