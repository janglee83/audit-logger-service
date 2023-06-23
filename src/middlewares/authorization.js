const _ = require('lodash');
const CustomApiMessageError = require('../error/CustomApiMessageError');
const httpCode = require('../utils/http-code');

const Authorization = {
    checkHeader: async (request, response, next) => {
        const ClientDomain = request.headers['x-client-domain'];
        const ClientPath = request.headers['x-client-path'];

        if (ClientDomain.length === 0 || ClientPath.length === 0) {
            throw new CustomApiMessageError(httpCode.BAD_REQUEST, 'Wrong header');
        }

        next();
    }
}

module.exports = Authorization;
