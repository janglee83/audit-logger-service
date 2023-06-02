const mongoose = require('mongoose');

const ACTION_NAME_VALUE = {
  GET: 0,
  POST: 1,
  PUT: 2,
  UPDATE: 3,
};

const EVENT_STATUS = {
    SUCCESSES: 1,
    ERROR: 0
}

const Event = mongoose.Schema(
  {
    id_address: {
      type: String,
      require: true,
    },
    entity_table: {
      type: String,
      require: true,
    },
    request_url: {
      type: String,
      require: true,
    },
    entity_id: String,
    description: String,
    action_name_tag: {
      type: Number,
      require: true,
      enum: Object.values(ACTION_NAME_VALUE),
    },
    status: {
        type: Number,
        require: true,
        enum: Object.values(EVENT_STATUS)
    },
    attribute_change_id: [{
      type: mongoose.Types.ObjectId,
      ref: 'AttributeChange'
    }]
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Event', Event);
