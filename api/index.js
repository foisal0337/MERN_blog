const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const multer = require("multer");
const path = require("path");


const app = express();
dotenv.config();

//externel 

const authRoute = require("./routes/auth-router");
const userRoute = require("./routes/user-router");
const postRoute = require("./routes/post-router");
const categoryRoute = require("./routes/catagories-router");


// db connection 
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gsxvicj.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));




// midelware 

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


//image upload 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


// routing start point 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});