const mongoose = require('mongoose')
const User = require("../models/users");

const caseSchema = new mongoose.Schema(
  {
    case_id: {
      type: String,
      required: [true, "can't be blank"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["closed", "active"],
    },

    user_id: {
      type: Array,
      required: false,
      default: null,
    },

    last_active: {
      type: Date,
      required: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.Array,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const caseModel =  mongoose.model('case',caseSchema);

module.exports = caseModel;