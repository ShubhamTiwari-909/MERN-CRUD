const mongo = require('./mongo');
const userSchema = require('./Schema/userSchema')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

// get method 
app.get('/' , (req,res) => {
    const connnectToMongo = async () => {
        await mongo().then(async () => {
            try {
                const result = await userSchema.find({})
                res.send(result)
            }
            finally{
                console.log("Data Fetched succefully")
            }
        })
    }
    connnectToMongo()
})

//post method
app.post('/post' , (req, res) => {
    const connnectToMongo = async () => {
        await mongo().then(async () => {
            try {
                const user = {
                email : req.body.email,
                username : req.body.username,
                password : req.body.password,
                };
                const result = await userSchema(user).save();
                res.send(result)
            }
            finally{
                console.log("Data Saved succefully")
            }
        })
    }
    connnectToMongo()

})

//delete method
app.delete('/delete/:id' , (req, res) => {
    const connnectToMongo = async () => {
        await mongo().then(async () => {
            try {
                const id = req.params.id;
                const result = await userSchema.remove({'_id' : id})
                res.send(result)
            }
            finally{
                console.log("Data Deleted succefully")
            }
        })
    }
    connnectToMongo()

})

//delete method
app.put('/update' , (req, res) => {
    const connnectToMongo = async () => {
        await mongo().then(async () => {
            try {
                const updatedId = req.body.updatedId;
                const updatedEmail = req.body.updatedEmail;
                const updatedUsername = req.body.updatedUsername;
                const updatedPassword = req.body.updatedPassword;
                const result = await userSchema.update({'_id' : updatedId} , {$set: {'username' : updatedUsername, 'email' : updatedEmail, 'password' : updatedPassword}})
                res.send(result)
            }
            finally{
                console.log("Data Deleted succefully")
            }
        })
    }
    connnectToMongo()

})

app.listen(port , () => {
    console.log(`running on port ${port}`)
})