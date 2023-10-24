import "./mongo";

import app from "./app";
import { config } from "./config";

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
