const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

let noun = ""
let adjective = ""
let verb = ""
let noun2 = ""
let adjective2 = ""

app.get("/first-word", (req, res) => {
    res.send(`<form action="/second-word" method="POST"><br/>
        <label for="noun">Noun</label>
        <input 
        type="text"
        id="noun"
        name="noun"
        placeholder="Enter noun"
        required
        />
        <br/>
        <button id="first-word" type="submit">Next</button>
    </form>`)
})

app.post("/second-word", (req,res) => {
    noun = req.body.noun
    res.send(`<form action="/third-word" method="POST"><br/>
        <p>${noun}</p>
        <label for="adjective">Adjective</label>
        <input 
        type="text"
        id="adjective"
        name="adjective"
        placeholder="Enter adjective"
        required
        />
        <br/>
        <button id="second-word" type="submit">Next</button>
    </form>`)
})

app.post("/third-word", (req,res) => {
    adjective = req.body.adjective
    res.send(`<form action="/fourth-word" method="POST"><br/>
        <p>${adjective}</p>
        <label for="verb">Verb</label>
        <input 
        type="text"
        id="verb"
        name="verb"
        placeholder="Enter verb"
        required
        />
        <br/>
        <button id="third-word" type="submit">Next</button>
    </form>`)
})

app.post("/fourth-word", (req,res) => {
    verb = req.body.verb
    res.send(`<form action="/fifth-word" method="POST"><br/>
        <p>${verb}</p>
        <label for="noun2">Noun</label> 
        <input 
        type="text"
        id="noun2"
        name="noun2"
        placeholder="Enter noun"
        required
        />
        <br/>
        <button id="fourth-word" type="submit">Next</button>
    </form>`)
})

app.post("/fifth-word", (req,res) => {
    noun2 = req.body.noun2
    res.send(`<form action="/done" method="POST"><br/>
        <p>${noun2}</p>
        <label for="adjective2">Adjective</label>
        <input 
        type="text"
        id="adjective2"
        name="adjective2"
        placeholder="Enter adjective"
        required
        />
        <br/>
        <button id="fifth-word" type="submit">Done</button>
    </form>`)
})

app.post("/done", (req, res) => {
    adjective2 = req.body.adjective2
    res.redirect("/done")
})

app.get("/done", (req, res) => {
    res.send(`<h1>You are done now.</h1>
    <p>You chose the words ${noun}, ${verb}, ${adjective}, ${noun2}, ${adjective2}</p><br/>
    <a href= "/">Restart<a>
    `,
    (noun = ""),
    (adjective = ""),
    (verb = ""),
    (noun2 = ""),
    (adjective2 = ""))
})