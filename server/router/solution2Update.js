const router = require("express").Router();
const Solution2 = require("../Models/Solution2");
const multer = require("multer");

// <<<<<<<<<<<<<----------Upload Image------------>>>>>>>>>>>>>>>>

var storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, "./images");
  },
  filename: function (req, file, cb) { 
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadMultiple = upload.fields([
  { name: "sol2FirstImage", maxCount: 10 },
  { name: "sol2ThirdImage", maxCount: 10 },
]);

router.put("/", uploadMultiple, async (req, res) => {

  const filter = { _id: req.body.id };

  let sol2FirstImage1 = "";
  let sol2ThirdImage1 = "";

  try {
    const {
      pageName,
      pageDesc,
      sol2FirstMainSubHeading,
      sol2FirstMaiHeading,
      sol2FirstMainPera,
      sol2FirstHeading,
      sol2FirstPera,
      sol2SecondHeading,
      sol2SecondPera,
      sol2ThirdHeading,
      sol2ThirdPera,
      sol2FourthHeading,
      sol2FourthBtnTxt,
      sol2FourthPera,

      sol2FirstImage,
      sol2ThirdImage,
      sol2FirstImageFilename,
      sol2ThirdImageFilename, 
    } = req.body;

    sol2FirstImage
      ? (sol2FirstImage1 = sol2FirstImage)
      : (sol2FirstImage1 = sol2FirstImageFilename);
    sol2ThirdImage
      ? (sol2ThirdImage1 = sol2ThirdImage)
      : (sol2ThirdImage1 = sol2ThirdImageFilename);

    const update = {
      pageName: pageName,
      pageDesc: pageDesc,
      sol2FirstMaiHeading: sol2FirstMaiHeading,
      sol2FirstMainSubHeading: sol2FirstMainSubHeading, 
      sol2FirstMainPera: sol2FirstMainPera,
      sol2FirstImage: sol2FirstImage1,
      sol2FirstHeading: sol2FirstHeading,
      sol2FirstPera: sol2FirstPera,
      sol2SecondHeading: sol2SecondHeading,
      sol2SecondPera: sol2SecondPera,
      sol2ThirdHeading: sol2ThirdHeading, 
      sol2ThirdPera: sol2ThirdPera,
      sol2ThirdImage: sol2ThirdImage1,
      sol2FourthHeading: sol2FourthHeading,
      sol2FourthPera: sol2FourthPera,
      sol2FourthBtnTxt: sol2FourthBtnTxt,
    };

    const response = await Solution2.findOneAndUpdate(filter, update);

    if (response) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
