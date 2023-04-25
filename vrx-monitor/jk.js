const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const PORT = 3001;
const app = express();
const day = 1000 * 60 * 60 * 24;
// const morgan = require('morgan');
// var fs = require('fs');
// var util = require('util');

// app.use(morgan('combined'));
app.use(
  sessions({
    secret: "sdsghjkkaklslkabascbbhfbacabhcjnakmsdbd",
    saveUninitialized: true,
    cookie: { maxAge: day },
    resave: false,
  })
);

// settings env
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});



// @ Routes Import
const poc = require("./routes/poc");


// @ Settings Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// @routes Here
// app.use("/", user);
app.use("/", poc);

