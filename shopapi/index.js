const express = require("express");
const app = express();


const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");




dotenv.config();

// connection to DB mongoose 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Succesfull"))
    .catch((err) => {
        console.log(err)
    });

    


app.use(cors());
//----Before root--------
app.use(express.json());
//-----------------------

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
    console.log("Backen Server is Runing");
});

