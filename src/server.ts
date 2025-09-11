import { Server } from "http";
import app from "./app";
import { envVars } from "./app/config/env";
const mongoose = require("mongoose");

let server: Server;
const startServer = async()=>{
  try {
     await mongoose.connect(envVars.DB_URL);
     console.log("Connected to mongoDB");
      server = app.listen(envVars.PORT, () => {
      console.log(`libairy is listeing on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
(async () => {
  await startServer();
})();


