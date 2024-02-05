const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://omit106ahmed:yTwVDjMF0GbyntKp@my-sites.snbiw9g.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const FirstDataCollection = client.db("FirstDataDB").collection("FirstData");
      const SecondDataCollection = client.db("FirstDataDB").collection("SecondData");
      const ProductsDataCollection = client.db("FirstDataDB").collection("products");
      const TodayDataCollection = client.db("FirstDataDB").collection("today");
      // Send a ping to confirm a successful connection
      app.get('/FirstData', async (req, res) => {
        const cursor = FirstDataCollection.find()
        const FirstData = await cursor.toArray()
        res.send(FirstData);
      })
      app.get('/SecondData', async (req, res) => {
        const cursor = SecondDataCollection.find()
        const SecondData = await cursor.toArray()
        res.send(SecondData);
      })
      app.get('/products', async (req, res) => {
        const cursor = ProductsDataCollection.find()
        const products = await cursor.toArray()
        res.send(products);
      })
      app.get('/today', async (req, res) => {
        const cursor = TodayDataCollection.find()
        const today = await cursor.toArray()
        res.send(today);
      })
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





