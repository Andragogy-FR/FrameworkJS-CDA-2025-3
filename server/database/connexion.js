import mongoose from "mongoose"
const uri = process.env.MONGO_URI

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  if(!uri) {
    console.error('BDD : URI undefined')
    return false
  }
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }
}

export async function connect(_, res, next){
    if(!uri) {
        console.error('BDD : URI undefined')
        return false
      }
      try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        next()
      } catch {
        console.error(err)
        res.status(500).send('BDD Error !')
      }
}

export async function disconnect(_, _r, next){
    try {
        await mongoose.disconnect();
    }
    catch {
        console.error(err)
    }
    finally{
        next()
    }
}
run().catch(console.dir);
