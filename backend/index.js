import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "booklists"
})

app.use(express.json())
app.use(cors())


// lists stuff
app.get("/", (req, res) => {
    res.json("Welcome to the backend")
})

app.get("/lists", (req, res) => {
    const q = "SELECT * FROM Lists"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/lists", (req, res) => {
    const q = "INSERT INTO Lists (`list_title`, `genre_id`, `desc`, `cover`) VALUES (?)"
    const values = [req.body.list_title, req.body.genre_id, req.body.desc, req.body.cover]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)

        const listId = data.insertId;

        return res.json({listId})
    })
})

// books stuff
app.get("/books", (req, res) => {
    const q = "SELECT * FROM Books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const booksData = req.body.booksData; // Assuming booksData is an array of book objects
    
    const values = booksData.map(book => [req.body.list_id, book.book_title, book.book_author, book.book_cover]);
    const q = "INSERT INTO Books (`list_id`, `book_title`, `book_author`, `book_cover`) VALUES ?";

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Books added");
    });
});
// app.post("/books", (req, res) => {
//     const q = "INSERT INTO Books (`list_id`, `book_title`, `book_author`, `book_cover`) VALUES (?)"
//     const values = [req.body.list_id, req.body.book_title, req.body.book_author, req.body.book_cover]

//     db.query(q, [values], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("List added")
//     })
// })

// books with specific id
app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM Books WHERE list_id = ?";
    db.query(query, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

// Lists with specific id

app.get("/lists/:id(\\d+)", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM Lists WHERE id = ?";
    db.query(query, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

app.get("/lists/:genre", (req, res) => {
    const genre = req.params.genre;
    const query = "SELECT * FROM Lists WHERE genre_id LIKE ?";
    db.query(query, [`%${genre}%`], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



app.listen(8800, () => {
    console.log("Connected to backend!")
})