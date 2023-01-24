const mongoose = require('mongoose')


const clinicSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  description: {
    type: String
  },
  medicine: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  },
  payment:{
    type: String
  }
})


module.exports = mongoose.model('Clinic', clinicSchema)