const contact_form = document.getElementById('info');

function setCredentials(email, pass) {
    let Credentials = {
        user_email: email,
        user_pass: pass
    };

    Credentials_Stored_Object = JSON.parse(localStorage.getItem("Credentials"));

    if (Credentials_Stored_Object['user_email'] === Credentials['user_email']) {
        console.log("User already exist!");
        showToast('Utilisateur exist déja!', 'error', 4000);
    } else {
        localStorage.setItem("Credentials", JSON.stringify(Credentials));
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

    setCredentials(user_email, user_pass);
}

contact_form.addEventListener('submit', HandleFormSubmit);