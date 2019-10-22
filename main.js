var words = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part"
]

var word = words[Math.floor(Math.random() * words.length)]
var answerArray = []
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_"
}

var remainingLetters = word.length

while (remainingLetters > 0) {
  alert(answerArray.join(" "))
}



var guess = prompt("Guess a letter or click cancle");
if(guess == null){
  break;
}else if(guess.length !== 1){
  alert("Please enter a single letter.");
}else{
  for(var j = 0; j<word.length; j++){}
}

console.log(words)
