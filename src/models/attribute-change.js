const mongoose = require('mongoose');

const AttributeChange = mongoose.Schema(
  {
    field_name: {
      type: String,
      require: true,
    },
    old_value: {
      type: mongoose.SchemaTypes.Mixed,
      require: true,
    },
    new_value: {
      type: mongoose.SchemaTypes.Mixed,
      require: true,
    },
    value_type: {
        type: String,
        require: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('AttributeChange', AttributeChange);
