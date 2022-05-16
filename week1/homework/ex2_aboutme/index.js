document.body.style.fontFamily = "Arial, sans-serif"

document.getElementById("nickname").innerHTML = "Sanaz"
document.getElementById("fav-food").innerHTML = "pizza"
document.getElementById("hometown").innerHTML = "Kerman"


addClass();
   function addClass() {
      const all = document.querySelectorAll('li');
      all.forEach(function (i) {
           i.classList.add('list-item');      
      });
   }