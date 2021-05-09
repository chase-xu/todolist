const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://root:chase@172.20.0.1/';

// Database Name
// const client = new MongoClient(url, { useUnifiedTopology: true });

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());



// async function run() {
//     try {
//       // Connect the client to the server
//     //   await client.connect();
//       // Establish and verify connection
//     //   await client.db("local").command({ ping: 1 });
//       MongoClient.connect(url, (err,db)=>{
//         if(err) throw err;
//         console.log('connected to mongo');
//         var dbo = db.db('local');
//         dbo.collection("todolist").find({}).toArray(function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             // res.send(result);
//             db.close();
//           });
//     });
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);


app.post('/api/items', (req, res)=>{
    console.log('received request');
    res.send('connected');
    MongoClient.connect(url, (err,db)=>{
        if(err) throw err;
        console.log('connected to mongo');
        var dbo = db.db('local');
        dbo.collection("todolist").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
          });
    });

});


// Use connect method to connect to the server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   client.close();
// });
const port = 8082;
app.listen(port, () => {
    console.log('Example app listening at '+ port)
});