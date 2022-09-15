import express, { Router } from "express";
import db from "../database/connect.js";



const router = express.Router();


router.post("/", async (req, res) => {

  try {
    new db.Posts(req.body).save();
  res.json({ message: "Irasas sekmingai sukurtas" });
  } catch (error) {
    res.status(500).send( "Ivyko serverio klaida" );
  }
  
});


router.get("/:id", async (req, res) => {

  try {
    const post = await db.Posts.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).send( "Ivyko serverio klaida" );
    
  }
});


router.get("/", async (req, res) => {
  try {
    const posts = await db.Posts.findAll();
    res.json(posts);
  } catch (error) {
    // res.status(500).end()

    // res.sendStatus(500) grazina tik klaidos statusa

    res.status(500).send( "Ivyko serverio klaida" );
  }
});


router.put("/edit/:id", async (req, res) => {

  try {const post = await db.Posts.findByPk(req.params.id);
  post.update(req.body);
  res.json({ message: "Irasas sekmingai atnaujintas" });
    
  } 
  
  catch (error) {res.status(500).send( "Ivyko serverio klaida" );
 }
  
});

router.delete("/delete/:id", async (req, res) => {


  try {
    const post = await db.Posts.findByPk(req.params.id);
  post.destroy();
  res.json({ message: "irasas sekmingai istrintas" });
  } 
  catch (error) {
    res.status(500).send( "Ivyko serverio klaida" );
  }
  
});




export default router