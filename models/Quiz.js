const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['Q&A', 'Poll'] },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{
    question: String,
    options: [String],
    correctOption: { type: Number, required: function() { return this.type === 'Q&A'; } },
    timer: { type: Number, default: 0 }
  }],
  impressions: { type: Number, default: 0 }
});

module.exports = mongoose.model('Quiz', quizSchema);
