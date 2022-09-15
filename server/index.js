import  express  from "express";
import routers from "./controller/post.js";
import database from "./database/connect.js";
import cors from 'cors'
import session from "express-session";
import userRouters from "./controller/users.js";




const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 60000000 }
}))

app.use('/api/route/', routers)
app.use('/api/user/', userRouters)

app.listen(3000)