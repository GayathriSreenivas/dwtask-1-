import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Sequelize from "sequelize";


const app = express();

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow the specified headers
  next();
});
// database connection

const sequelize = new Sequelize(
 'authentication',
 'student',
 'password',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


    // Sequelize user model is initialized earlier as User
    const User = sequelize.define('registrations', {
        age         :       { type: Sequelize.INTEGER},
        name        :       { type: Sequelize.STRING },
        mbl         :       { type: Sequelize.STRING },
        email       :       { type: Sequelize.STRING,  primaryKey: true ,validate: {isEmail:true} },
        password    :       { type: Sequelize.STRING }, 
    });
    
    // User.drop();
   
    //create data
    app.post('/register', async (req, res) => {
        const data = req.body;
        console.log(data);
        var emailid=data.email;
        try {
          
           const user = await User.findOne({
             where: {
               emailid
             }
              }) ;
              res.send(user);
              console.log(user);
            } catch (err) {
              res.send(err);
              console.log(err);
            
           }
      });
    
    //read data
    app.get("/", async (req, res) => {
        const uname = req.params.uname;
        try {
          const user = await db.User.findOne({
            where: {
              uname
            }
          });
          console.log(user);
          if (!user) res.send({
            User: "Username not found"
          });
          res.send({
            User: user
          });
        } catch (err) {
          res.send(err);
        }
      });
    
    //delete data
    

//middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//start server
app.listen(3001,() =>{
        console.log("server started")
    }
)

//routes
app.get("/",(req,res)=>{
    res.send("hello!!!")
})
