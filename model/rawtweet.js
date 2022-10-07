const mongoose = require("mongoose");

var TweetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: "Required",
  },
  content: {
    type: String,
    required: "Required",
  },
});

mongoose.model("Tweet", TweetSchema, "tweets");
