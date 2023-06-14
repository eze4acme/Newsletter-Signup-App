const form = document.querySelector('form');
const button = document.querySelector('button');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailEl = document.getElementById('email');
const error = document.querySelector('.error');

button.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();
    const firstname = fname.value;
    const lastname = lname.value;
    const email = emailEl.value;
    if (firstname && lastname && email) {
        let data = { 
            firstname: firstname, 
            lastname: lastname, 
            email: lastname
        };
        // let postData = ;
        // console.log(postData);
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data.firstname))
    }
    form.reset();
}












// const form = document.querySelector('form');
// // const inputs = document.querySelectorAll('input');
// const button = document.querySelector('button');
// const fname = document.getElementById('fname')
// const lname = document.getElementById('lname')
// const emailEl = document.getElementById('email')
// const error = document.querySelector('.error');

// // Button listening for click event
// button.addEventListener('click', submit);

// // Submit function logic

// function submit(e) {
//     e.preventDefault();
//     const firstname = fname.value;
//     const lastname = lname.value;
//     const email = emailEl.value;
//     if (firstname && lastname && email ) {
        
//         // console.log(data);
//         let data = {firstname, lastname, email};
//         let postData = JSON.stringify(data);
//         console.log(postData);
//         fetch('/signup', {
//             method: 'POST',
//             body: postData,
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         form.reset()
//     }
// }


































// function submit(e) {
    // e.preventDefault();

    // Check if any input fields are empty
    // let isEmpty = false;
    // inputs.forEach(input => {
    //     if (input.value.trim() === '') {
    //         isEmpty = true;
    //         return;
    //     }
    // });

    // if (isEmpty) {
    //     error.style.display = 'block';
    //     return;
    // }

//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
//     console.log(data);

//     let fetchData = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     fetch('/signup', fetchData)
//         .then(res => {
//             if (res.ok) {
//                 // Handle successful response
//             } else {
//                 error.style.display = 'block';
//             }
//         });
// }