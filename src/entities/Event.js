const constants = require('../utils/constants');

class Event {
  constructor(clientDomain, clientPath, type, table, entity_id, action_id, attribute_change_id) {
    this.id_address = clientDomain;
    this.entity_table = table;
    this.request_url = clientPath;
    this.entity_id = entity_id;
    this.action_name_tag = action_id;
    this.status = type;
    this.attribute_change_id = attribute_change_id
  }

  generateDescription(event) {
    switch (parseInt(event.action_name_tag)) {
      case constants.ACTION_NAME_VALUE.GET:
        return `Domain ${event.id_address} with path ${event.request_url} has just accessed collection to retrieve data.`;
      case constants.ACTION_NAME_VALUE.POST:
        return `The domain ${event.id_address} with path ${event.request_url} has just accessed collection to create data.`;
      case constants.ACTION_NAME_VALUE.PUT:
        return `The domain ${event.id_address} with path ${event.request_url} has just accessed collection to modify the data.`;
      case constants.ACTION_NAME_VALUE.DESTROY:
        return `The domain "${event.id_address}" with path "${event.request_url}" has just accessed collection to delete data.`;
      default:
        return '';
    }
  }
}

module.exports = Event;
