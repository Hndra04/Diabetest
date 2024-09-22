import express from "express";
import inference from "./inference.mjs";
import 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded( { extended: false }))
app.use(logger)

// get form values
app.post("/data", make_prediction, (req, res) =>{
    res.render("data", {
        result: (req.result) ? "ARE" : "ARE NOT"
    })
    console.log(req.result)
})

async function make_prediction(req, res, next){
    function getValue(x){
        req.result = x;
    }
    let age = req.body.age
    let weight = req.body.weight
    let height = req.body.height
    let glucose = req.body.glucose
    let pregnancies = req.body.pregnancies
    let insulin = req.body.insulin
    let skinThickness = req.body.skinThickness
    let bloodPressure = req.body.bloodPressure

    let x = [age, weight, height, glucose, pregnancies, insulin, skinThickness, bloodPressure]
    const result = await inference(x, getValue);
    console.log(req.result)
    if(req.result == 1){
        req.result = true;
    }
    else {
        req.result = false;
    }
    next()

}

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}
// navigation
app.get('/', (req, res) => {
    res.redirect("/login");
});

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/sign-up', (req, res) => {
    res.render('sign-up')
})

app.get('/data', (req, res) => {
    res.render('data')
})

app.get('/diagnosis', (req, res) => {
    res.render('diagnosis')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});