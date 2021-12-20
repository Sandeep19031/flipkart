import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

//instance of mongoclient
const client = new MongoClient(url);
async function main() {
  //connecting cluster {it might give an error}
  try {
    await client.connect();

    await ListingAll(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

export async function ListingAll() {
  const cursor = await client
    .db("FlipkartDatabase")
    .collection("Mobiles")
    .find({});

  const results = await cursor.toArray();
  console.log(results);
  return results;
}
export default client;
