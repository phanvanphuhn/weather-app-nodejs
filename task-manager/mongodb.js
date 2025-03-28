const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "testdb";

async function main() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(connectionURL);
    const db = client.db(databaseName);

    await db
      .collection("tasks")
      .deleteMany({ age: 20 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // Close the connection when done
    await client.close();
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main().catch(console.error);
