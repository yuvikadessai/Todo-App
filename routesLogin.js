const express = require("express");
const router = express.Router();
const db = require("./db");



//Get All records
router.get("/", (req, res) =>{
    db.query("SELECT * FROM Login",(err, result) =>{
        if(err)return res.status(404).json(err);
        res.json(result);
    });
});

//Get by ID
router.get("/:id", (req, res) =>{
    const { id} = req.params;
    db.query("SELECT * FROM Login WHERE id=?",[id],(err, result) =>{
        if(err)return res.status(404).json(err);
        res.json((result[0]));
    });
});
//Insert the User
router.post("/", (req, res)=>{
    const { id, name, email_id, password} = req.body;
    db.query("INSERT INTO Login (id, name, email_id, password) VALUES( ?,?, ?, ?)", [ id, name, email_id,password], (err, result) =>{
        if(err)return res.status(404).json(err);
        res.json({message:'Record Added Successfully'});
    });
});

//Delete by id 
router.delete("/:id", (req, res)=>{
    const {id} = req.params;
    db.query("DELETE FROM Login WHERE id=?", [id], (err, result)=>{
        if(err)return res.status(404).json(err);
        res.json({message:'Record Deleted'});
    });
});

//Update data
router.put("/:id", (req, res)=>{
    const {id} = req.params;
    const { name, email_id, password} = req.body;
    db.query("UPDATE Login SET name=?, email_id=?, password=? WHERE id=?", [ name, email_id,password, id], (err, result) =>{
        if(err)return res.status(404).json(err);
        res.json({message:'Record Updated Successfully'});
    });
});


module.exports = router;