const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("testdb");
    const tasks = database.collection("tasks");

    const newUser = [
      { name: "John Doe", age: 30 },
      { name: "Jane Doe", age: 25 },
      { name: "Jim Doe", age: 20 },
    ];
    const result = await tasks.insertMany(newUser);

    console.log(`Inserted user with id: ${result.insertedId}`);
  } catch (error) {
    console.error("Unable to insert user", error);
  } finally {
    await client.close();
  }
}

run();
