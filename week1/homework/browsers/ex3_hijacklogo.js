// In this exercise you're expected to write a JavaScript function that can be executed in the console of the Google website.
// Find out how to select the element that contains the Google logo, and store it in a variable.
// Modify the src and srcset of the logo so that it's replaced by the HackYourFuture logo instead.




// const googleLogo = document.getElementById("hplogo")
// googleLogo.addEventListener('click', myFunction())

// function myFunction() {
//     document.getElementById("logo").src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
//   }


function hijackGoogleLogo() {
    const googleLogo = document.getElementById('hplogo');
    googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    //srcset Defines multiple sizes of the same image, allowing the browser to select the appropriate image source.
  }
  
  hijackGoogleLogo();
