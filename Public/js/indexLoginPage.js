

const forms = document.querySelector(".forms"),
    showPassword = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

showPassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=> {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password =>{

            if( password.type === "password" ){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener ("click", e => {
        e.preventDefault(); //preventing the form from submitting
        forms.classList.toggle("show-signup");
    
    })
})
forms.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("err").textContent='';
    fetch("/api/user/login",{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then((result) => {
        if (!result.ok) {
            document.getElementById("err").textContent = "Unable to login";
            return null;
        } else {
            return result.json();
        }
    })
})
