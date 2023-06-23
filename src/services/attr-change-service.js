const { AttributeChangeDaos } = require('../daos');
const constants = require('../utils/constants');

const AttributeChangeService = {
  insertData: async (data, action_id) => {
    const payload = {
      field_name: data.field_name,
      old_value: data.old_data,
      new_value: data.new_data,
      value_type: data.type,
    };
    if (
      action_id === constants.ACTION_NAME_VALUE.POST ||
      action_id === constants.ACTION_NAME_VALUE.PUT
    ) {
      const result = await AttributeChangeDaos.insertData(payload);
      return result;
    }
    return null
  },
};

module.exports = AttributeChangeService;
