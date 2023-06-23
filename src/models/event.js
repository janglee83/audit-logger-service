const mongoose = require('mongoose');
const { ACTION_NAME_VALUE, EVENT_STATUS } = require('../utils/constants')

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
    attribute_change_id: {
      type: mongoose.Types.ObjectId,
      ref: 'AttributeChange',
      require: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Event', Event);
