// connect to database
require("dotenv").config();
require("./db/connection");
const Book = require("./models/bookmodel");

//start server software
const express=require("express");
//rename express to be app as per convention
const app = express()

//setup middleware software to accept JSON on incoming HTTP requests
app.use(express.json())

const port = process.env.PORT;

app.post("/books/addBook", async (req,res) => {
    console.log("Req.Body=",req.body)

    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })

    const successReponse = {
        message: "Book successfully added",
        book: newBook,
      };
      res.status(201).send(successReponse);

})

app.get("/books/listBooks", async (req,res) =>{
    const allBooks = await Book.find({});

    const successReponse = {
        message: "list of books in the database",
        books: allBooks,
      };
      res.status(200).json(successReponse);
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))