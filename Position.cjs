const mongoose = require('mongoose')


const PositionSchema = { 
  playerName: {
    type: String, 
    requried: false,
    unique: true
  },
  playerPos : {
    type: String,
    required: false
  },
  Bank: {
    type: Number,
    required: false
  }
}

const Position = mongoose.model('Position', PositionSchema)

module.exports = Position