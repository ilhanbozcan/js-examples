const quotes = [
    {
        name: "Stephen King",
        quote: "A"
    },

    {
        name: "İlhan Bozcan",
        quote: "B"
    }
]
const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");


quoteBtn.addEventListener("click",displayQuote);


function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}