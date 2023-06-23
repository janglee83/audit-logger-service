const baseDaos = require('./base-daos');
const eventModel = require('../models/event');

const EventDaos = {
  insertData: async (data) => {
    return await baseDaos.insertData(eventModel, data);
  },
  findDataByCondition: async (condition) => {
    return await baseDaos.findDataByCondition(eventModel, condition);
  },
  findById: async (_id) => {
    return await baseDaos.findDataById(eventModel, _id);
  },
  getAll: async () => {
    return await eventModel.aggregate([
      {
        $match: {},
      },
      {
        $lookup: {
          from: 'attributechanges',
          localField: 'attribute_change_id',
          foreignField: '_id',
          as: 'attribute_change_detail',
        },
      },
    ]);
  },
};

module.exports = EventDaos;
