const eventService = require('../services/event-service');
const attributeChangeService = require('../services/attr-change-service');
const convertResponse = require('../utils/response-helper')
const httpCode = require('../utils/http-code')
const { EventDaos } = require('../daos');

const eventController = {
    update: async (request, response) => {
        const { type, table, entity_id } = request.query
        const { action_id, data } = request.body
        await eventService.handleCheckActionValue(action_id);
        await eventService.handleCheckTypeValue(type);
        await eventService.handleCheckDataValue(data, action_id);

        const clientDomain = request.headers['x-client-domain'];
        const clientPath = request.headers['x-client-path'];

        const attrChangeResult = await attributeChangeService.insertData(data, action_id)
        const eventStoreResult = await eventService.handleStore(clientDomain, clientPath, type, table, entity_id, action_id, attrChangeResult?._id);

        convertResponse(httpCode.CREATED_SUCCESS, { message: 'Create success', data: eventStoreResult }, response)
    },
    index: async (request, response) => {
        const result = await EventDaos.getAll()

        convertResponse(httpCode.SUCCESS, { message: 'Get success', data: result }, response)
    }
}

module.exports = eventController
