const contact_form = document.getElementById('info');

function getCredentials(email, pass) {
    let Credentials = {
        user_email: email,
        user_pass: pass
    };

    if (localStorage.getItem("Credentials") !== JSON.stringify(Credentials)) {
        console.log("User does not exist!");
        showToast('Erreur de connexion', 'error', 4000);
    } else {
        sessionStorage.setItem("Connected", "1");
        console.log("Connecter!");
        showToast('Connecter!', 'success', 4000);
    }
}

function HandleFormSubmit(event) {
    event.preventDefault();

    let user_email = document.getElementById('email').value;
    let user_pass = document.getElementById('pass').value;

    console.log("Email: ", user_email);
    console.log("Password: ", user_pass);

    getCredentials(user_email, user_pass);
}

contact_form.addEventListener('submit', HandleFormSubmit);