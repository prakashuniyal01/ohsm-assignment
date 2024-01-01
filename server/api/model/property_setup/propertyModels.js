const {Schema, model} = require('mongoose');
const { is_phone, is_email } = require('../../utils/Validator');

const proparty_schema = new Schema({
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
})

const TaskModel = model('task', task_schema);

module.exports = {TaskModel};
