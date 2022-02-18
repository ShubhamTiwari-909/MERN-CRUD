const mongo = require("./mongo");
const userSchema = require("./Schema/Schema");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { isValidObjectId } = require("mongoose");

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// get method
app.get("/", (req, res) => {
  const connnectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const result = await userSchema.find({});
        res.send(result);
      } finally {
        console.log("Data Fetched succefully");
      }
    });
  };
  connnectToMongo();
});
// get method with id
app.get("/getuser/:id", (req, res) => {
  const connnectToMongo = async () => {
    await mongo().then(async () => {
      try {
        let id = req.params.id;
        const result = await userSchema.find({_id : id});
        res.send(result);
      } finally {
        console.log("Data Fetched succefully");
      }
    });
  };
  connnectToMongo();
});

//post method
app.post("/post", (req, res) => {
  const connnectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const userAlreadyExist = req.body.username;
        const user = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        };
        const userExist = await userSchema
          .find({ username: userAlreadyExist })
          .count();
        if (userExist >= 1) {
          // res.send(404);
        } else {
          const result = await userSchema(user).save();
          res.send(result);
        }
      } finally {
        console.log("Data Saved succefully");
      }
    });
  };
  connnectToMongo();
});

//delete method
app.delete("/delete/:id", (req, res) => {
  const connnectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const id = req.params.id;
        const result = await userSchema.deleteOne({ _id: id });
        res.send(result);
      } finally {
        console.log("Data Deleted succefully");
      }
    });
  };
  connnectToMongo();
});

//delete method
app.put("/update", (req, res) => {
  const connnectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const updateId = req.body.updateId;
        const updateEmail = req.body.updateEmail;
        const updateUsername = req.body.updateUsername;
        const updatePassword = req.body.updatePassword;

        const result = await userSchema.update(
          { _id: updateId },
          {
            $set: {
              email: updateEmail,
              username: updateUsername,
              password: updatePassword,
            },
          }
        );
        res.send(result);
      } finally {
        console.log("Data Deleted succefully");
      }
    });
  };
  connnectToMongo();
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
