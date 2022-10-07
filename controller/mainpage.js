const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const GetModel = mongoose.model("Tweet");
const SendModel = mongoose.model("FormReply");

const FormReply = require("../model/formreply");

router.get("/", (req, res) => {
  rand = Math.floor(Math.random() * 1000);
  GetModel.findOne({ id: rand }, (err, docs) => {
    if (!err) {
      res.render("index", { data: docs });
    } else {
      console.log("Got an error");
    }
  });
});

router.post("/", (req, res) => {
  var tid = req.body.tweetId;
  //   var tid = 2;

  var annotation = req.body.annotation;
  SendModel.findOne({ id: tid }, (err, docs) => {
    if (!err) {
      if (docs) {
        if (annotation == "Yes") {
          SendModel.findOneAndUpdate(
            { id: tid },
            {
              $inc: { misCount: 1, totalCount: 1 },
            }
          ).exec();
        } else {
          SendModel.findOneAndUpdate(
            { id: tid },
            {
              $inc: { notmisCount: 1, totalCount: 1 },
            }
          ).exec();
        }

        res.render("success", {});
      } else {
        if (annotation == "Yes") {
          const newAnnotation = new FormReply({
            id: tid,
            totalCount: 1,
            misCount: 1,
            notmisCount: 0,
          });
          newAnnotation.save();
        } else {
          const newAnnotation = new FormReply({
            id: tid,
            totalCount: 1,
            notmisCount: 1,
            misCount: 0,
          });
          newAnnotation.save();
        }

        res.render("success", {});
      }
    } else {
      console.log("Got an error");
    }
  });
});

module.exports = router;
