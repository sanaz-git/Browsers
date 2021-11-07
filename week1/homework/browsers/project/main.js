const quotes = [
  {
    quote: "Change the world by being yourself.",
    author: "_Amy Poehler",
  },
  {
    quote: "Whatever you do, do it well. ",
    author: "_Walt Disney",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "_Pablo Picasso",
  },
  {
    quote: "Dream as if you’ll live forever, live as if you’ll die today.",
    author: "_James Dean",
  },
  {
    quote: "You do not find the happy life. You make it.",
    author: "_Camilla Eyring Kimball",
  },
];

const icon = document.getElementById("button");
const p = document.querySelector("p");
const h3 = document.querySelector("h3");
const quoteIcon = document.createElement("i");

button.addEventListener("click", function () {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  p.textContent = quotes[randomQuotes].quote;
  h3.textContent = quotes[randomQuotes].author;
});
