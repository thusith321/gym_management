const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserRoute = require("./routes/clients");

const multer = require("multer");
const path = require("path");


const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(cors()) 

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(req);
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

const update = multer({ storage: storage });
app.put("/api/update", update.single("file"), (req, res) => {
  res.status(200).json("File has been updated");
});


app.use("/api/clients", UserRoute);
app.use("/images", express.static(path.join(__dirname, "/images")));

app.listen("5000", ()=>{
    console.log("Backend is running.");
});