const quotes = [
    {
      quote: "Change the world by being yourself.",
      author:"Amy Poehler"
    },
    {
      quote: "Whatever you do, do it well. ",
      author:" Walt Disney"
    },
    {
      quote: "Everything you can imagine is real.",
      author:"Pablo Picasso"
    },
    {
      quote: "Dream as if you’ll live forever, live as if you’ll die today.",
      author:"James Dean"
    },
    {
      quote: "You do not find the happy life. You make it.",
      author:"Camilla Eyring Kimball"
    }
];
    
    
    
const icon = document.getElementById('button');
const p = document.querySelector('p');
const h3 = document.querySelector('h3');

button.addEventListener('click', function(){

    let randomQuotes = Math.floor(Math.random() * quotes.length) 
    p.textContent = quotes[randomQuotes].quote;   
    h3.textContent = quotes[randomQuotes].author;      
});