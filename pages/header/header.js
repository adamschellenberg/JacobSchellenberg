const getRandomQuote = async () => {
    const result = await fetch("/assets/quotes.json");
    let data = await result.json();
    const dataLength = data.length;
    let randomQuoteIndex = Math.floor(Math.random() * dataLength);
    let randomQuote = data[randomQuoteIndex];
    updateBlockquote(randomQuote);
}

const updateBlockquote = (randomQuote) => {
    document.getElementById("quote").innerHTML = randomQuote.quote;
    document.getElementById("quote-author").innerHTML = randomQuote.author;

}

getRandomQuote();