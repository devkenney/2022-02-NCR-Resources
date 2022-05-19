//imports
const express = require("express")
const morgan = require("morgan")
const mongoConfig = require("./config")

require("dotenv").config()

const PORT = process.env.PORT || 3001;
const server = express()

server.use(express.json())
server.use(morgan("dev"))


server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

const extraRoutes = require('./routes/extras');
server.use('/extra', extraRoutes);

const productRoutes = require('./routes/products');
server.use('/product', productRoutes);

const userRoutes = require('./routes/users');
server.use('/user', userRoutes);

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening: ${PORT}`)
})