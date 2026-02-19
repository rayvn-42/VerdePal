const contact_form = document.getElementById('contact');

function HandleFormSubmit(event) {
    event.preventDefault();

    let user_name = document.getElementById('name').value;
    let user_email = document.getElementById('email').value;
    let email_subject = document.getElementById('subject').value;
    let user_message = document.getElementById('message').value;

    console.log("Username: ", user_name);
    console.log("Email: ", user_email);
    console.log("Subject: ", email_subject);
    console.log("Message: \n", user_message);

    showToast('Message Envoyé!', 'success', 4000);
}

contact_form.addEventListener('submit', HandleFormSubmit);