require("../db/mongoose");

const Task = require("../models/task");

const main = async (id) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    console.log("task: ", task);

    const count = await Task.countDocuments({ completed: false });
    console.log("count: ", count);
  } catch (e) {
    console.log("error: ", e);
  }
};

main("67eb1d87a905405f4633270f");
