(function(){
    emailjs.init("lJnZmmzm-7yVHkhsu");
 })();
    
  // Handling form submission
  document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the email value from the input
    let templateParams = {
      names: document.getElementById('name').valuel,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    // Send the form data using sendForm method
    emailjs.send("service_p71pnur", "template_5tovytu", templateParams)
    .then(function(response) {
      document.getElementById('responseMessage').style.display = "block";
    }, function(error) {
      console.log('FAILED...', error);
    });

    // Clear the input field
    this.reset();
  });