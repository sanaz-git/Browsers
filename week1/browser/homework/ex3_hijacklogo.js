// In this exercise you're expected to write a JavaScript function that can be executed in the console of the Google website.
// Find out how to select the element that contains the Google logo, and store it in a variable.
// Modify the src and srcset of the logo so that it's replaced by the HackYourFuture logo instead.


  function hijackLogo() {
    const googleLogo = document.querySelector('.lnXdpd');
    googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
  
  hijackLogo();
  
