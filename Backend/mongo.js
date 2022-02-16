const mongoose = require("mongoose");

const Database =
  "mongodb+srv://ShubhamDev:Shubham909@cluster0.zkttc.mongodb.net/Demo?retryWrites=true&w=majority";

module.exports = async () => {
  await mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose
};

