const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

async function connection() {
    const uri = "mongodb+srv://umairian:z8vnsftAnnGKsDEQ@cluster0.ecqft.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        const connectionObj = await client.connect();
        console.log(connectionObj);
        return connectionObj.db("first_db");
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;