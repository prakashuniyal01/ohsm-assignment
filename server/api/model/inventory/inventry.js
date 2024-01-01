const { Schema, model } = require('mongoose');
const { SCHEMA_OPTIONS } = require('../../utils/schema_options');

const inventory_schema = {
  proparty_name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  inventory_type: {
    type: String,
    require: true,
    enum: ["1room_set", "1bhk", "2bhk", "3bhk", "flates", "houses"],
    default: "other"
  },
  inventory_proparty_type: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  capacity: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  amenities: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  availabilty_status: {
    type: String,
    require: true,
    enum: ["working", "complated", "in process", "active"],
    default: "other"
  },
  note: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },

};


const _schema = new Schema( inventory_schema, SCHEMA_OPTIONS);

const inventoryModel = model('inventorys', _schema);

module.exports = { inventoryModel }