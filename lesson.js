// * Functional array methods ✨

// TODO map, filter, some, every, find, findIndex, reduce

const animals = ['cheetah', 'elephant', 'lion', 'gorilla', 'dog']


// ? I'd like to uppercase all the strings in this array and get back a new array
// ! -> map: you should use map whenever you need to transform every element in an array into something else.

const bigAnimals = animals.map((animal) => {
  // ? I need to return the newly transformed animal (so into uppercase)
  return animal.toUpperCase()
})  


// ! -> filter: is used when you want to filter elements in array by some condition 

const filteredAnimals = animals.filter((animal) => {
  // ? I need to return a boolean for whether this animal should be included
  return animal.length > 4
})

// console.log(filteredAnimals)

const books = [
  { name: "Dune", author: "Frank Herbert", rating: 5 },
  { name: "The Myth Of Normal", author: "Gabor Maté", rating: 5 },
  { name: "The Body Keeps The Score", author: "Bessel van der Kolk", rating: 5 },
  { name: "Harry Potter and the Chamber of Secrets", author: "JK Rowling", rating: 5 }
]

// ! findIndex gets the INDEX of the element in the array based on the condition
const indexOfBodyKeepsScore = books.findIndex((book) => {
  return book.name === 'The Body Keeps The Score'
})

console.log(indexOfBodyKeepsScore)

// ! An example with find: finds a particular element based on a condition

const bodyKeepsScore = books.find((book) => {
  // ! return a condition to know if this is the book we're looking for
  return book.name === 'The Body Keeps The Score'
})

// console.log(bodyKeepsScore)

// * Another example with map

// const readBooks = books.map((book) => {
//   // ? return our new object, containing the isRead: true property
//   const newBook = {
//     name: book.name,
//     author: book.author,
//     rating: book.rating,
//     isRead: true
//   }
//   return newBook
// })

// ! Equivalent, but shorter:
const readBooks = books.map((book) => {
  return { name: book.name, author: book.author, rating: book.rating, isRead: true }
})
// ? you can make it shorter than this too but ask ChatGPT if you want that. :)

// console.log(readBooks)


// ! some: this returns true if ANY element in the array matches a condition.

const hasHarryPotterBook = books.some((book) => {
  // ? check if book matches the condition (true/false)
  return book.author === 'JK Rowling'
})

// console.log(hasHarryPotterBook)

// ! every: this returns true is EVERY element in an array matches a condition
const hasFiveStarRating = books.every((book) => {
  return book.rating === 5
})

// console.log(hasFiveStarRating)

const products = [
  {
    name: 'Airpods',
    price: 150
  },
  {
    name: 'Tenzing 24 Pack',
    price: 22
  },
  {
    name: 'Coffee beans',
    price: 14
  }
]

// ! reduce: the superman of array methods.
// ? reduce takes an array and gives you back... anything

const sum = products.reduce((acc, product, i) => {
  console.log(`Current element has index ${i}. Accum is ${acc}. Product is: ${product.name}`)
  return acc + product.price
}, 0)

console.log(sum)