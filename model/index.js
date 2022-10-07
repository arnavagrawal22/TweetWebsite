const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/ResearchData",
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


