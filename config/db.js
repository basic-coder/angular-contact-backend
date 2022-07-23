const mongoose = require('mongoose')

const connectToMongo = () => {
    mongoose.connect(`mongodb://localhost:27017/contact`).then((data) => {
        console.log(`Mongo db connected with server: ${data.connection.host}`);
    })
}

module.exports = connectToMongo