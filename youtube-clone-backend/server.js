const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();


// ---------- MIDDLEWARE ----------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ---------- STATIC FILES ----------

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ---------- DATABASE CONNECTION ----------

mongoose.connect("mongodb://127.0.0.1:27017/youtubeClone")

.then(() => {
    console.log("MongoDB Connected");
})

.catch((error) => {
    console.log("MongoDB Error:", error);
});


// ---------- ROUTES ----------

const authRoutes = require("./routes/auth");
const videoRoutes = require("./routes/video");
const historyRoutes = require("./routes/history");
const channelRoutes = require("./routes/channel");

app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/channel", channelRoutes);


// ---------- TEST ROUTE ----------

app.get("/", (req, res) => {
    res.send("YouTube Clone Backend Running 🚀");
});


// ---------- SERVER ----------

const PORT = 5002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});