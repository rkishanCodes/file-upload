const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const auth = require("../middleware/auth");

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", auth, upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  try {
    if (req.file.mimetype.startsWith("image")) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });

      res.json({
        msg: "File uploaded and processed successfully",
        url: result.secure_url,
      });
    } else {
      res.json({
        msg: "File uploaded successfully",
        fileType: req.file.mimetype,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
