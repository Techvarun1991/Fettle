import express from "express";
import cors from "cors";
import { createConnection } from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "fettle"
});

conn.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Database connected !");
    }
});

app.post('/register', (request, response) => {
    var insertQry = `INSERT INTO register VALUES(
        '${request.body.name}','${request.body.email}',
        '${request.body.password}')`;
    console.log(request.body.email);
    conn.query(insertQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: 'Error in inserting customer' });
            console.log(error);
        }
        else {
            response.status(200).send({ message: 'Customer registered successfully' });
        }
    });
});

app.get('/customer', (request, response) => {
    var selectQry = `SELECT * FROM register where email="` + request.body.email + `";`;
    conn.query(selectQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: error });
        } else {
            response.status(200).send(result);
        }
    })
});

app.post('/login', (request, response) => {
    var fetchQry = `SELECT * FROM register WHERE email= "` + request.body.email + `" and password="` + request.body.password + `";`;
    // var fetchQry = `SELECT * FROM register where email="` + request.body.email + `";`;
    console.log(request.body.email);
    console.log(request.body)
    conn.query(fetchQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: "error connecting" });
        } else {
            response.status(200).send(result);
        }
    });
});

app.post('/delete', (request, response) => {
    var fetchQry = `DELETE FROM register WHERE email= "` + request.body.email + `" and password="` + request.body.password + `";`;
    // var fetchQry = `SELECT * FROM register where email="` + request.body.email + `";`;
    console.log(request.body.email);
    console.log(request.body)
    conn.query(fetchQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: "error connecting" });
        } else {
            response.status(200).send(result);
        }
    });
});

app.listen(9800, () => {
    console.log("connected")
})