const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...
console.log(library.map((value) => {return  value.author}).filter((value, index, authors) => {return  authors.indexOf(value) === index}));

// List all book titles published after 2000...
console.log(library.filter(value => {return value.year > 2000}).map((value) => {return  value.title}))

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...
console.log(Object.keys(library[0]).join(', '));

// List all bestseller book titles...
console.log(library.filter(value => {return value.bestseller}).map((value) => {return  value.title}));