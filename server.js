import app from "./app.js";
import connection from "./db/connection.js";

const port = process.env.PORT || 4750;
connection();
app.listen(port, () =>
  console.log(`Server Started, listening to port ${port}`)
);
