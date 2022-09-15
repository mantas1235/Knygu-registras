import  express, {Router } from "express";
import db from "../database/connect.js";
import bcrypt from 'bcrypt'


const userRouters = express.Router()

const saltRounds = 10;


userRouters.post('/register', async (req, res)=>{
    req.body.Slaptazodis = await bcrypt.hash(req.body.Slaptazodis, saltRounds)

    try {
        await db.Users.create(req.body)
        res.json({message: 'vartotojas sekmingai sukurtas'})
    } catch (error) {
        res.status(400).json({message: 'registracija Nepavyko'})
    }
})

userRouters.post('/login', async (req,res) => {
const user = await db.Users.findOne({
   
    where: {
        Pastas:req.body.Pastas
    }
})  
if (!user)
return res.send('Toks vartotojas nerastas')

if (await bcrypt.compare(req.body.Slaptazodis, user.Slaptazodis)){
    req.session.loggedIn = true
    res.send('prisijungimas sekmingas')
}
else{
    res.status(401).send('nepavyko prisijungti')
}

})


export default userRouters