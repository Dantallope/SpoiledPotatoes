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
