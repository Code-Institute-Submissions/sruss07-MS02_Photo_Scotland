function sendMail(contactForm) {
    emailjs.send("abz1903", "ci-ms2", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value,
        "subscribe": contactForm.subscribe.value
    })
        .then(
            // Change button text to green and display 'sent' message
            function () {
                let sentButton = document.getElementById('submit-btn');
                sentButton.style.backgroundColor = "green";
                sentButton.innerHTML = "Sent!";
            },
            // On error, using standard browser alert
            function (error) {
                alert("Sorry, some information is missing. Please fill out the form and click submit again", error);
            });
            // Clear form after submission
            document.getElementById('contactForm').reset();
    return false;
}
