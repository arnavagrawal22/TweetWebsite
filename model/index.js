const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://arnav:tweetannotations123@cluster0.lrbi6xp.mongodb.net/ResearchData",
  { useNewUrlParser: true },
  (error) => {
    if (!error) {
      console.log("SUCCESS");
    } else {
      console.log("Error");
    }
  }
);

const FormReply = require("./formreply");
const Tweet = require("./rawtweet");
