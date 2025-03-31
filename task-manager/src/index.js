const express = require("express");
require("./db/mongoose");

// Routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// App
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Start server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
