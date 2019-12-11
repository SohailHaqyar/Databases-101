const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 3000;
 
app.use(cors()); // This be the middleware
app.use(bodyParser()); //This be the query parser 

// DB CONFIGURATION

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your sql password will go here",
    database: "todo_app"
})

// Checking for errors
connection.connect((error)=>{
    if (!error) console.log("Database successfully connected")
    else console.log("Connection error")
})

// GET ALL TODO ITEMS
app.get("/todos/load", (req, res, next)=>{
    connection.query("select * from todo_items", (err, rows)=>{
        if(!err) res.send(rows)
        else res.send(err)
    })
})

// GET SPECIFIC TODO ITEM
app.get("/todos/load/:id", (req, res, next)=>{
    connection.query("select * from todo_items where id = ?", req.params.id, (err, row)=>{
        if(!err) res.send(row)
        else res.send(err)
    })    
})

// CREATE TODO ITEM
app.post("/todos/create", (req, res)=>{
    connection.query("insert into todo_items set ?", req.body, (err, result)=>{
    if(!err) res.send(result)
    else res.send(err)
    })
})

// DELETE TODO ITEM
app.delete("/todos/delete/:id", (req, res, next)=>{
    connection.query("delete from todo_items where id = ?", req.params.id, (err, result, fields)=>{
        if(!err) res.send(`Todo item with id: ${req.params.id} succesfully deleted`)
        else res.send(err)
    })
})

// UPDATE TODO ITEM
app.put("/todos/update/:id", (req, res, next)=>{
    connection.query("update todo_items set text = ? where id = ?", [req.body.text, req.params.id], (err, result, fields)=>{
        if(!err) res.send(`Todo item with id: ${req.params.id} successfully updated`)
        else res.send(err)
    })
})

// TAG TODO ITEM
app.post("/todos/tagTodoItem", (req, res, next)=>{
    connection.query("insert into todo_item_tag set ?", req.body, (err, result, fields)=>{
        if(!err) res.send(`Todo item succesfully tagged`)
        else res.send(err)
    })
})

// UNTAG TODO ITEM
app.delete("/todos/untagTodoItem/:id", (req, res, next)=>{
    connection.query("delete from todo_item_tag where todo_item_id = ?", [req.params.id], (err, result, fields)=>{
        if(!err) res.send(`Todo item with id: ${req.params.id} succesfully untagged`)
        else res.send(err)
    })
})

// MARK TODO ITEM AS COMPLETED
app.put("/todos/markCompleted/:id", (req, res, next)=>{
    connection.query("update todo_items set is_completed = true where id = ?", req.params.id, (err, result)=>{
        if(!err) res.send(`Todo item with id: ${req.params.id} successfully marked as completed`)
        else res.send(err)
    })
})

app.listen(port, ()=>{
    console.log(`Why Are You Running Why Are you Running On Server: ${port}`);
})
