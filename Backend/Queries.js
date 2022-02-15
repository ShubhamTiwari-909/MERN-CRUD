const mongo = require("./mongo");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userSchema = require("./Schema/Schema");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getData = () => {
  return userSchema.find({});
};



//get method
app.get("/", (req, res) => {
  const connectToMongo = async (logic) => {
    await mongo().then(async (response) => {
      try {
        console.log("connected succefully");
        const result = await logic();
        res.send(result);
      } finally {
        console.log("done fetching the data");
      }
    });
  };

  connectToMongo(getData);
});



//post method
app.post("/post", (req, res) => {
  const saveData = () => {
    const user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    return new userSchema(user).save();
  };

  const connectToMongo = async (logic) => {
    await mongo().then(async () => {
      try {
        console.log("connected succefully");
        const result = await logic();
        console.log(result);
        res.send(result);
      } finally {
        console.log("done");
      }
    });
  };

  connectToMongo(saveData);
});



// delete method
app.delete("/delete/:id", (req, res) => {
  const connectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const id = req.params.id;
        console.log(id);
        const result = await userSchema.remove({ _id: id });
        console.log(result);
        res.send(result);
      } finally {
        console.log("deleted");
      }
    });
  };

  connectToMongo();
});



//update method
app.put("/update", (req, res) => {
  const connectToMongo = async () => {
    await mongo().then(async () => {
      try {
        const updateId = req.body.updateId;
        const updateEmail = req.body.updateEmail;

        const result = await userSchema.update({'_id' : updateId} , { $set : {'email' : updateEmail}})
        res.send(result);
      } finally {
        console.log("updated email");
      }
    });
  };
  connectToMongo();
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
