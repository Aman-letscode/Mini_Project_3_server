// const mongoose = require('mongoose')
// // const { MongoClient, ServerApiVersion } = require('mongodb');

// const connect = async (url) => {
//     try{
//         const db_opt = {
//             dbname: "CourtRoom"
//         }
        
//         await mongoose.connect(url,db_opt)

//             console.log(`Connected Successfully with ${db_opt.dbname}`);
        
//     }catch(err){
//         console.log(`Error Detected:${err}`)
//     }
// }

// module.exports = connect;




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Wce2024:WCE_2024@chatapp.hlggxle.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports.connect = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("CourtRoom").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB:CourtRoom!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);




