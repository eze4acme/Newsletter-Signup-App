require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const port = process.env.PORT || 5000; 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.post('/signup', (req, res) => {
    const { firstname, lastname, email} = req.body;
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields:{
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    }
    const postData = JSON.stringify(data)
    const options = {
        url: 'https://us11.api.mailchimp.com/3.0/lists/89e3c895b9',
        method:'POST',
        headers:{
            Authorization:'auth e0222f68c730f293257a2ba4d9a08589-us11'
        },
        body: postData
    }

   request(options, (err, response, body) =>{
        if(err){
            res.json({error: err})
        }else{
            if (response.statusCode === 200) {
                res.sendStatus(200)
            }else{
                res.redirect('fail.html')
            }
        }
   })
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