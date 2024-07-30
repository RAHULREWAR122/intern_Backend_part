import mongoose from "mongoose";
import dotenv  from "dotenv" 

console.log(process.env.MONGOOSE_CONNECT)

mongoose.connect(process.env.MONGOOSE_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to database:'));
db.once('open', () => {
    console.log("MongoDB connected successfully");
});

export default db;
