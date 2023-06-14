require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; // Use 3000 as the default port if PORT environment variable is not set

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
    const { firstname, lastname, email} = req.body;

    // Check if required fields are missing
    // if (!firstname || !lastname || !email) {
    //     res.redirect('/fail.html');
    //     return;
    // }

    console.log(firstname)
    // Handle successful submission here
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});





















// require('dotenv').config()
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended:true}))
// const port = process.env.PORT || PORT;

// app.post('/signup', (req, res) =>{
//     const { firstname, lastname, email, js } = req.body
// //    if(!firstname || !lastname || !email){
//     //    res.redirect('/fail.html')
//     //    return;
//     // }else{

//         console.log(req.body);
//     // }
// })

// app.listen(port, () =>{
//     console.log(`listen on port ${port}`);
// })