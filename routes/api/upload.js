const router = require("express").Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
});



router.route("/new").post(upload.single("file"), (req, res) => {
    const file = req.file;
    const s3FileURL = process.env.AWS_UPLOAD_URL;

    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    //Where you want to store your file

    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };

    s3bucket.upload(params, function (err, data) {
        if (err) {
            res.status(500).json({
                error: true,
                Message: err
            });
        } else {

            var newFileUploaded = {
                description: req.body.description,
                fileLink: s3FileURL + file.originalname,
                s3_key: params.Key
            };

            res.json({
                ...newFileUploaded
            })
        }
    });
})


module.exports = router;