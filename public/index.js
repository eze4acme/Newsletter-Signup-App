const form = document.querySelector('form');
const button = document.querySelector('button');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailEl = document.getElementById('email');
const error = document.querySelector('.error');
const inputs = document.querySelectorAll('input');
const success = document.querySelector('.success')
const container = document.querySelector('.container')

button.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();
    const firstname = fname.value;
    const lastname = lname.value;
    const email = emailEl.value;
        if (!firstname || !lastname || !email) {
            error.style.display = 'block'
            function handleMouseEnter(event) {
                error.style.display = 'none'
            }
            inputs.forEach(input =>{
                input.addEventListener('mouseenter', handleMouseEnter);
            })

        }
    if (firstname && lastname && email) {
        let data = { firstname,  lastname, email };
        let postData = JSON.stringify(data);
        fetch('/signup', {
            method: 'POST',
            body: postData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            if (res.ok) {
                success.classList.add('success-open')
                container.style.display = 'none'
                
            }else{
                res.json({error: err})
            }
        })
    }
    form.reset()
}




























