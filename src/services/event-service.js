const constant = require('../utils/constants');
const CustomApiMessageError = require('../error/CustomApiMessageError');
const httpCode = require('../utils/http-code');
const _ = require('lodash');
const Event = require('../entities/Event');
const { EventDaos } = require('../daos');

const eventService = {
  handleCheckActionValue: async (action_id) => {
    if (!Object.values(constant.ACTION_NAME_VALUE).includes(action_id)) {
      throw new CustomApiMessageError(httpCode.NOT_FOUND, 'Wrong action value');
    }
  },
  handleCheckTypeValue: async (type) => {
    if (!Object.values(constant.EVENT_STATUS).includes(parseInt(type))) {
      throw new CustomApiMessageError(httpCode.NOT_FOUND, 'Wrong type value');
    }
  },
  handleCheckDataValue: async (data, action_id) => {
    switch (action_id) {
      case (constant.ACTION_NAME_VALUE.GET, constant.ACTION_NAME_VALUE.DESTROY):
        if (!_.isEmpty(data))
          throw new CustomApiMessageError(httpCode.NOT_FOUND, 'Data is not required');
      case constant.ACTION_NAME_VALUE.POST:
        if (!_.isEmpty(data) || data.new_data.length === 0 || data.type.length === 0)
          throw new CustomApiMessageError(httpCode.NOT_FOUND, 'Data is required');
      case constant.ACTION_NAME_VALUE.PUT:
        if (
          _.isEmpty(data) ||
          data.new_data?.length === 0 ||
          data.type?.length === 0 ||
          data.old_data?.length === 0
        )
          throw new CustomApiMessageError(httpCode.NOT_FOUND, 'Data is required');
    }
  },
  handleStore: async (clientDomain, clientPath, type, table, entity_id, action_id, attribute_change_id) => {
    let payload = new Event(clientDomain, clientPath, type, table, entity_id, action_id, attribute_change_id);
    const message = payload.generateDescription(payload);
    payload.description = message;
    const result = await EventDaos.insertData(payload);
    return result;
  },
};

module.exports = eventService;
