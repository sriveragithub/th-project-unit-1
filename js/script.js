// quotes data that will be displayed on the webpage
const quotes = [
  {
    quote: "Somewhere, something incredible is waiting to be known.",
    source: "Carl Sagan",
  },
  {
    quote:
      "For small creatures such as we the vastness is bearable only through love.",
    source: "Carl Sagan",
  },
  {
    quote:
      "If you want to make an apple pie from scratch, you must first create the universe.",
    source: "Carl Sagan",
  },
  {
    quote: `We're made of star stuff. We are a way for the cosmos to know itself.`,
    source: "Carl Sagan",
  },
  {
    quote:
      "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    source: "Carl Sagan",
  },
  {
    quote:
      "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
    source: "Carl Sagan",
  },
  {
    quote:
      "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
    source: "Carl Sagan",
  },
  {
    quote:
      "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
    source: "Carl Sagan",
  },
  {
    quote:
      "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
    source: "Carl Sagan",
    citation: "Cosmos",
    year: 1980,
  },
  {
    quote:
      "We are like butterflies who flutter for a day and think it is forever.",
    source: "Carl Sagan",
    citation: "Cosmos",
    year: 1980,
  },
];

// getRandomQuote generates a random number based on the length of the arr parameter given to the function. This lets us grab a random quote from our quotes array to display on the webpage
function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

// printQuote selects a random quote using the getRandomQuote function in conjunction with the array passed in the parameter. This random quote is then broken out into an html template literal string. This html string is then set to the #quote-box div using DOM manipulation
function printQuote() {
  let quoteObj = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}`;
  if (quoteObj.citation) {
    html += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) {
    html += `<span class="year">${quoteObj.year}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html
}

// finally, the #load-quote button is selected and an on-click is attached that will trigger printQuote when it is clicked.
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
