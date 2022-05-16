const myHobbies = [
  "Meditation",
  "Reading",
  "Programming",
  "Hanging out with friends",
  "Going to the gym",
];

function array(arr) {
  const ulElement = document.createElement("ul");

  myHobbies.forEach(function (hobby) {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML += hobby;   
  });
  return ulElement;
}
document.body.appendChild(array(myHobbies));
