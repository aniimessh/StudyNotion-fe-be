const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
  title: { type: String },
  timeDuration: { type: String },
  description: { type: String },
  videoUrl: { type: String },
  lectureHour: { type: String },
  lectureMinute: { type: String },
  lectureSecond: { type: String },
});

module.exports = mongoose.model("SubSection", SubSectionSchema);
