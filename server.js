const express = require("express");
const fs = require("fs");
const cors = require("cors");
const parseWebGLCode = require("./dist/index");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    fs.readFile("./some.json", "utf-8", (err, data) => {
        if (err) console.log(err);

        res.json(data.replaceAll("\\", ""));
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
