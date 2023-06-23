const CustomError = require('./CustomError')

class CustomApiMessageError extends CustomError {
    constructor(code, message) {
        super(code, message)
    }
}

module.exports = CustomApiMessageError
