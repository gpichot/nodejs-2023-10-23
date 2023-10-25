import mongoose from "mongoose";

import app from "./app";
import { config } from "./config";

mongoose.connect(config.mongodbUri);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
