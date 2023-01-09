const loginBttn = document.getElementById('loginBttn')

loginBttn.onclick = function(event) {
    event.preventDefault();
    
    window.location = 'http://localhost:3001/login'
}

