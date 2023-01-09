

const forms = document.querySelector(".forms"),
    showPassword = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

const loginForm = document.getElementById('loginF')
const signUpForm = document.getElementById('signUpF')

showPassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {

            if (password.type === "password") {
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
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");

    })
})

/* Login In */
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("err").textContent = '';
    await fetch("/api/user/login", {
        method: 'POST',
        body: JSON.stringify({ email, password, }),
        headers: { 'Content-Type': 'application/json'},
        
    }).then((result) => {
        if (result.ok) {
           window.location.replace('/')
        } else {
            document.getElementById("err").textContent = "Unable to login";
            return null;
            
        }
    });
});

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("emailSU").value;
    const password = document.getElementById("passwordSU").value;
    const newPasswordC = document.getElementById("passwordSU2").value;

    if (password != newPasswordC){
        console.log('oof');
    }else{
        document.getElementById("signUpErr").textContent = '';
        fetch("/api/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        }).then((result) => {
            if (!result.ok) {
                document.getElementById("signUpErr").textContent = "Unable to create user";
                return null;
            } else {
                window.location.replace('/login')
                return result.json();
            }
        })
    }
});
