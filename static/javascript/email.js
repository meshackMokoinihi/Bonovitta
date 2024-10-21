(function(){
    emailjs.init("32l6lbCsWRppGrJ-E");
 })();
    
    
  
  

  // Handling form submission
  document.getElementById('notifyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the email value from the input
    let templateParams = {
      user_email: document.getElementById('user_email').value
    };

    // Send the form data using sendForm method
    emailjs.send("service_p71pnur", "template_hmopzu6", templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('responseMessage').style.display = "block";
    }, function(error) {
      console.log('FAILED...', error);
    });

    // Clear the input field
    this.reset();
  });