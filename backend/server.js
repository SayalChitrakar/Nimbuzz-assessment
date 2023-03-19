import app from "./index.js";
import mongoose from "mongoose";

const port = process.env.PORT;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority" },
  })
  .then(() => console.log("connected to database successfully."))
  .catch((error) => console.log(error));
app.listen(port, () => {
  console.log(`listening to server on port ${port}`);
});
