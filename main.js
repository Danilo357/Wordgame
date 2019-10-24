window.onload = function() {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

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
  let words3 = words.filter(words => words.length >= 3)

  var word
  var guess
  var geusses = []
  var lives
  var counter
  var space
  var sound
  var showLives = document.getElementById("mylives")

  var buttons = function() {
    myButtons = document.getElementById("buttons")
    letters = document.createElement("ul")

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet"
      list = document.createElement("li")
      list.id = "letter"
      list.innerHTML = alphabet[i]
      check()
      myButtons.appendChild(letters)
      letters.appendChild(list)
    }
  }

  result = function() {
    wordHolder = document.getElementById("hold")
    correct = document.createElement("ul")

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word")
      guess = document.createElement("li")
      guess.setAttribute("class", "guess")
      if (word[i] === "-") {
        guess.innerHTML = "-"
        space = 1
      } else {
        guess.innerHTML = "_"
      }

      geusses.push(guess)
      wordHolder.appendChild(correct)
      correct.appendChild(guess)
    }
  }

  comments = function() {
    showLives.innerHTML = "You have " + lives + " lives"
    if (lives < 1) {
      showLives.innerHTML = "Game Over Danilo ):"
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win Danilo (: !"
      }
    }
  }

  var animate = function() {
    var drawMe = lives
    drawArray[drawMe]()
  }

  canvas = function() {
    myStickman = document.getElementById("stickman")
    context = myStickman.getContext("2d")
    context.beginPath()
    context.strokeStyle = "#fff"
    context.lineWidth = 2
  }

  head = function() {
    myStickman = document.getElementById("stickman")
    context = myStickman.getContext("2d")
    context.beginPath()
    context.arc(60, 25, 10, 0, Math.PI * 2, true)
    context.stroke()
  }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy)
    context.lineTo($pathTox, $pathToy)
    context.stroke()
  }

  frame1 = function() {
    draw(0, 150, 150, 150)
  }

  frame2 = function() {
    draw(10, 0, 10, 600)
  }

  frame3 = function() {
    draw(0, 5, 70, 5)
  }

  frame4 = function() {
    draw(60, 5, 60, 15)
  }

  torso = function() {
    draw(60, 36, 60, 70)
  }

  rightArm = function() {
    draw(60, 46, 100, 50)
  }

  leftArm = function() {
    draw(60, 46, 20, 50)
  }

  rightLeg = function() {
    draw(60, 70, 100, 100)
  }

  leftLeg = function() {
    draw(60, 70, 20, 100)
  }

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1
  ]

  check = function() {
    list.onclick = function() {
      var geuss = this.innerHTML
      this.setAttribute("class", "active")
      this.onclick = null
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss
          counter += 1
        }
      }
      var j = word.indexOf(geuss)
      if (j === -1) {
        lives -= 1
        comments()
        animate()
      } else {
        comments()
      }
    }
  }

  play = function() {
    words3 = [words3]

    chosenCategory = words3[Math.floor(Math.random() * words3.length)]
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)]
    word = word.replace(/\s/g, "-")
    console.log(word)
    buttons()

    geusses = []
    lives = 6
    counter = 0
    space = 0
    result()
    comments()
    canvas()
  }

  play()
}
