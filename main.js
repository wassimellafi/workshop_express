const express = require("express");
const app = express();

// app.use(express.static("public"));
app.use("/home", express.static(__dirname + "/public/img/imgwinter.jpg"));
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});
app.get("/", verifytime, (req, res) => {
    res.sendFile(__dirname + "/public/navbar.html");
});

app.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/style.css");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});
// app.get("/", (req, res) => {
//     res.send("hello world");
// });
// app.get("/service", (req, res) => {
//     res.send("service page");
// });

function verifytime(req, res, next) {
    let now = new Date().toString();
    console.log(now);
    next();
}
const port = 5000;
app.listen(port, () => {
    console.log(`server on runing on port ${port}`);
});
