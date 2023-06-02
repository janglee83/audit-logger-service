const mongoose = require('mongoose');

const User = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    client_token: {
      type: String,
      require: true,
    },
    event_id: [{
        type: mongoose.Types.ObjectId,
        ref: 'Event'
    }]
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('User', User);
