const quotes = ["faith","trust","freedom","determination","continuity"];
const qq = document.getElementById("#new-quote-button");
const qList = document.getElementById("#quote-list");


qq.addEventListener("click", function () {
    const randomq = quotes[Math.floor(Math.random() * quotes.length)];
    const paragraphContainer = document.createElement("div");
    const quoteText = document.createElement("p");
   paragraphContainer.id="quote-container";
   qList.appendChild(paragraphContainer);
   
    quoteText.id="quote-text";
    quoteText.textContent = randomq;
   paragraphContainer.appendChild(quoteText);
}
); 





