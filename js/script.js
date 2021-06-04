/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    author: 'Carl Sagan'
  },
  {
    quote: 'For small creatures such as we the vastness is bearable only through love.',
    author: 'Carl Sagan'
  },
  {
    quote: 'If you want to make an apple pie from scratch, you must first create the universe.',
    author: 'Carl Sagan'
  },
  {
    quote: `We're made of star stuff. We are a way for the cosmos to know itself.`,
    author: 'Carl Sagan'
  },
  {
    quote: 'Science is not only compatible with spirituality; it is a profound source of spirituality.',
    author: 'Carl Sagan'
  },
  {
    quote: 'For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.',
    author: 'Carl Sagan'
  },
  {
    quote: 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
    author: 'Carl Sagan'
  },
  {
    quote: 'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
    author: 'Carl Sagan'
  },
  {
    quote: 'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.',
    author: 'Carl Sagan'
  },
  {
    quote: 'We are like butterflies who flutter for a day and think it is forever.',
    author: 'Carl Sagan'
  }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {

}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);