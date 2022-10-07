const mongoose = require("mongoose");

var FormReplySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: "Required",
  },
  misCount: {
    type: Number,
    required: "Required",
  },
  notmisCount: {
    type: Number,
    required: "Required",
  },
  totalCount: {
    type: Number,
    required: "Required",
  },
});

const FormReply = mongoose.model("FormReply", FormReplySchema, "annotated");

module.exports = FormReply;
