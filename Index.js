let container = document.createElement("div")
container.classList.add("container")
let row = document.createElement("div")
row.classList.add("row")
container.appendChild(row)

const getBooks = function(){
  fetch("https://striveschool-api.herokuapp.com/books")
  .then(result => result.json())
  .then(books => {
    books.forEach((book) => {
      let col = document.createElement("div")
      col.classList.add("col-3")
      col.innerText = "My name is luna"
      row.appendChild(col)
      console.log(col)
    })
  })
}

getBooks()


/*`<div class="card">
      <img src="${book.img}" class="img-fluid">
      <p>Title : ${book.title}</p>
      </div>` */

console.log("hello")
console.log(row)