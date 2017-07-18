const express = require("express");
const app = express();

app.use("/", express.static("public"));
app.use("/publicassets", express.static("publicassets"));

app.listen(3000, () => {
    console.log("holi")
});