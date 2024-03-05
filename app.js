const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 3000;

app.use(express.json());

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));
const db = client.db('mydb');
const collection = db.collection('users');

collection
  .insertMany([{ name: "Arkadian", age: "25" },{name :"israe" , age: "4"} , {name: "Majid", age: "2" }])
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));

collection.find().toArray()
.then((users) => console.log("all users ", users[0]))
.catch((error) => console.log("Error: ", error));





app.listen(PORT, () => {
    console.log(`erver is running onS http://localhost:${PORT}`);
  });
