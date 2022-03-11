const router = require("express").Router();
const multer = require("multer");
const Product = require("../Models/Product");

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
  { name: "proFirstImage", maxCount: 10 },
  { name: "proSecondImage", maxCount: 10 },
  { name: "proThirdImage", maxCount: 10 },
  { name: "proFourthCards1img", maxCount: 10 },
  { name: "proFourthCards2img", maxCount: 10 },
  { name: "proFourthCards3img", maxCount: 10 },
]);

// <<<<<<<<<<<<<----------Update product Page------------>>>>>>>>>>>>>>>>

router.put("/", uploadMultiple, async (req, res) => {

  console.log(req.body);

  const filter = { _id: req.body.id };

  let proFirstImage1 = "";
  let proSecondImage1 = "";
  let proThirdImage1 = ""; 
  let proFourthCards1img1 = "";  
  let proFourthCards2img1 = ""; 
  let proFourthCards3img1= ""; 

  try {

    const {
      pageName,
      pageDesc,
      proFirstHeading,
      proFirstImage,
      proFirstPera,
      proFirstSubHeading,
      proSecondHeading,
      proSecondImage,
      proSecondSubHeading,
      proSecondBullets, 
      proThirdHeading,
      proThirdImage,
      proThirdPera,
      proThirdAccordia,
      proFourthCards1img,
      proFourthCards1title,
      proFourthCards1desc,
      proFourthCards2img,
      proFourthCards2title,
      proFourthCards2desc,
      proFourthCards3img,
      proFourthCards3title,
      proFourthCards3desc,
      proFirstImageFilename,
      proSecondImageFilename,
      proThirdImageFilename,
      proFourthCards1imgFilename,
      proFourthCards2imgFilename,
      proFourthCards3imgFilename,
    } = req.body;

    proFirstImage
      ? (proFirstImage1 = proFirstImage)
      : (proFirstImage1 = proFirstImageFilename);   
    proSecondImage
      ? (proSecondImage1 = proSecondImage)
      : (proSecondImage1 = proSecondImageFilename);
    proThirdImage
      ? (proThirdImage1 = proThirdImage)
      : (proThirdImage1 = proThirdImageFilename);
    proFourthCards1img
      ? (proFourthCards1img1 = proFourthCards1img)
      : (proFourthCards1img1 = proFourthCards1imgFilename);
    proFourthCards2img
      ? (proFourthCards2img1 = proFourthCards2img)
      : (proFourthCards2img1 = proFourthCards2imgFilename);
    proFourthCards3img
      ? (proFourthCards3img1 = proFourthCards3img)
      : (proFourthCards3img1 = proFourthCards3imgFilename);

    const update = {
      pageName: pageName,
      pageDesc: pageDesc,
      proFirstHeading: proFirstHeading,
      proFirstSubHeading: proFirstSubHeading,
      proFirstPera: proFirstPera,
      proFirstImage: proFirstImage1,
      proSecondHeading: proSecondHeading,
      proSecondSubHeading: proSecondSubHeading,
      proSecondImage: proSecondImage1,
      proSecondBullets: proSecondBullets, 
      proThirdHeading: proThirdHeading,
      proThirdPera: proThirdPera,
      proThirdAccordia: proThirdAccordia,
      proFourthCards1img: proFourthCards1img1,
      proFourthCards1title: proFourthCards1title,
      proFourthCards1desc: proFourthCards1desc,
      proFourthCards2img: proFourthCards2img1,
      proFourthCards2title: proFourthCards2title,
      proFourthCards2desc: proFourthCards2desc,
      proFourthCards3img: proFourthCards3img1,
      proFourthCards3title: proFourthCards3title,
      proFourthCards3desc: proFourthCards3desc,
      proThirdImage: proThirdImage1,
    };

    const response = await Product.findOneAndUpdate(filter, update);

    if (response) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" }); 
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  // console.log(req.body);

  try {
    const updatedproduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedproduct);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
