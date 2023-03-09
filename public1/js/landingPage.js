const loginBttn = document.getElementById('logiin')

loginBttn.addEventListener('click', (event) =>{ 
    event.preventDefault();
    window.location='http://localhost:3001/login';
})

