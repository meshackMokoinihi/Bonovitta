emailjs.init("f1EemNd8cLi9KnZGe"); // Replace with your EmailJS public key

document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_75m4j0d', 'template_odd9d4f', this)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
});