const { Schema, model } = require('mongoose');
const { SCHEMA_OPTIONS } = require('../../utils/schema_options');
const { is_phone, is_email } = require('../../utils/Validator');

const proparty_schema = {
  proparty_type: {
    type: String,
    enum: ["1room_set", "1bhk", "2bhk", "3bhk", "flates", "houses"],
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: value => is_phone(value),
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: value => is_email(value),
      message: props => `${props.value} is not a valid email!`
    }
  },
  address: {
    type: String,
    default: "not available",
    required: false,
  },
  state: {
    type: String,
    required: false,
    default: "delhi",
  },
  city: {
    type: String,
    default: "new delhi",
    required: false,
  },
  pincode : {
    type:Number,
    required: true
  }
};


const _schema = new Schema( proparty_schema, SCHEMA_OPTIONS);

const propartyModel = model('propertys', _schema);

module.exports = { propartyModel }