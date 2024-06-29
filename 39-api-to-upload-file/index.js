const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (request, response, callback) {
            callback(null, "uploads");
        },
        filename: function (request, response, callback) {
            callback(null, File.filename + "_" + Date.now() + ".jpg");
        }
    })
}).single("user_file");


app.post('/upload', upload, (request, response) => {
    response.send("Upload");
});

app.listen(5500);
