const mongoose = require('mongoose');

const AttributeChange = mongoose.Schema(
  {
    field_name: {
      type: String,
    },
    old_value: {
      type: mongoose.SchemaTypes.Mixed,
    },
    new_value: {
      type: mongoose.SchemaTypes.Mixed,
    },
    value_type: {
        type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('AttributeChange', AttributeChange);
