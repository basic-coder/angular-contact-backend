const express = require('express')
const app = express()
const user = require('./routes/userRoute')
const PORT = 4000
const connectToMongo = require('./config/db')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

app.use('/api',user)

connectToMongo()

app.listen(PORT,()=>{
    console.log(`server is connected on http://localhost/${PORT}`);
})