const express = require("express");
const cors = require("cors");
const routes = require("./routes/messageRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/send", routes);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT} `);
});
