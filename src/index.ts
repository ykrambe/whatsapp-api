import { createApp } from './app';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()

async function startApp() {
  let app = await createApp();
  try {

    
    
    await mongoose.connect(process.env.MONGO_URI!!);
    console.info('Connected to MongoDB!');
    
    const port = process.env.PORT!!
    app.listen(port, () => {
      console.info(`Server Listening on port ${port}`);
    });

  } catch (e) {
    console.error (e);
    throw e;
  }
}

startApp();
