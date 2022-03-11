const mongoose = require("mongoose");

const solution2Schema = mongoose.Schema({
  pageName: {
    type: String,
    required: true,
  },
  pageDesc: {  
    type: String,
    required: true,
  },
  sol2FirstMaiHeading: {
    type: String,
    required: true,
  },
  sol2FirstMainSubHeading: { 
    type: String,
    required: true,
  },
  sol2FirstMainPera: {
    type: String,
    required: true,
  },
  sol2FirstImage: {
    type: String,
    required: true,
  },
  sol2FirstHeading: {
    type: String,
    required: true,
  },
  sol2FirstPera: {
    type: String,
    required: true,
  },
  sol2SecondHeading: {
    type: String,
    required: true,
  },
  sol2SecondPera: {
    type: String,
    required: true,
  },
  sol2ThirdHeading: {
    type: String,
    required: true,
  },
  sol2ThirdPera: {
    type: String,
    required: true,
  },
  sol2ThirdImage: {
    type: String,
    required: true,
  },
  sol2FourthHeading: {
    type: String,
    required: true,
  },
  sol2FourthPera: {
    type: String,
    required: true,
  },
  sol2FourthBtnTxt: {
    type: String,
    required: true,
  },
});

const Solution2 = mongoose.model("Solution2", solution2Schema);

module.exports = Solution2;
