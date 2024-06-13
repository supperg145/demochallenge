const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,

  },
  description: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now

  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
