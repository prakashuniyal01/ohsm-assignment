const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SCHEMA_OPTIONS } = require('../../utils/schema_options');
const { is_email } = require('../../utils/Validator');
const userSchema = new mongoose.Schema({
   firstName: {
      type: String,
      require: true,
      trim: true,
      min: 3,
      max: 20,
   },
   lastName: {
      type: String,
      require: true,
      trim: true,
      min: 3,
      max: 20,
   },
   username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
   },
   email: {
      type: String,
      required: true,
      validate: {
         validator: value => is_email(value),
         message: props => `${props.value} is not a valid email!`
      }
   },
   hash_password: {
      type: String,
      require: true,
   }
}, { timestamps: true });


//For get fullName from when we get data from database
userSchema.virtual("fullName").get(function () {
   return `${this.firstName} ${this.lastName}`;
});
userSchema.method({
   async authenticate(password) {
      return bcrypt.compare(password, this.hash_password);
   },
});
module.exports = mongoose.model("singup", userSchema);