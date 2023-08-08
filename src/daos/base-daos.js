const CustomApiMessageError = require('../error/CustomApiMessageError');
const httpCode = require('../utils/http-code');

const baseDaos = {
  insertData: async (model, data) => {
    try {
      const insertResponse = await model.create(data);
      return insertResponse;
    } catch (error) {
      throw new CustomApiMessageError(httpCode.BAD_REQUEST, 'Insert failed');
    }
  },
  findDataByCondition: async (model, condition) => {
    try {
      const findDataResponse = await model.find(condition);
      return findDataResponse;
    } catch (error) {
      throw new CustomApiMessageError(httpCode.BAD_REQUEST, 'Find failed');
    }
  },
  findDataById: async (model, _id) => {
    try {
      const findResponse = await model.findById(_id);
      return findResponse;
    } catch (error) {
      throw new CustomApiMessageError(httpCode.BAD_REQUEST, 'Find Failed');
    }
  },
  queryWithAggregation: async (model, query) => {
    try {
      const result = await model.aggregate(query);
      return result;
    } catch (error) {
      throw new CustomApiMessageError(httpCode.BAD_REQUEST, 'Query Failed');
    }
  }
};

module.exports = baseDaos;
