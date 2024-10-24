function someExample(a, b) {
  if (a < b) {
    console.log(1, 'a меньше б')
  } else {
    console.log(2, 'просто 2')
  }

  if (a > b) {
    console.log(3, 'a больше б')
  } else {
    console.log(4, 'просто 4')
  }
}

// someExample(4, 4)
//decision path 3

function getRandomNumber() {
  return Math.floor(Math.random() * 25)
  // return Math.floor(Math.random() * (25 - 10 + 1)) + 10
}

// Example usage of getRandomNumber function
console.log(getRandomNumber())
