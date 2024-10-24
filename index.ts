function someExample(a: number, b: number): void {
  if (a < b) {
    console.log(1)
  } else {
    console.log(2)
  }

  if (a > b) {
    console.log(3)
  } else {
    console.log(4)
  }
}

someExample(2, 4)
// a: number, b: number - 1
// if первый - 1
// if второй - 1
//decision path 1 + 1 + 1 = 3
