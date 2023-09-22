import app from "./app";
import { connectionDB } from "./database/connection";
import { PORT_ENV } from "./config/appconfig";

async function main() {
  try {
    connectionDB();
    app.listen(PORT_ENV);
    console.log(`Listening on port http://localhost:${PORT_ENV}`);
  } catch (error) {
    console.error(error);
  }
}

main();
