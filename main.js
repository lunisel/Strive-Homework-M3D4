let container = document.getElementsByClassName("container")[0]
let row = document.getElementsByClassName("row")[0]

const getBooks = function() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then(result => result.json())
    .then(books => {
      books.forEach((book) => {
        let col = document.createElement("div")
        col.classList.add("col-3")
        col.classList.add("my-2")
        col.innerHTML = `<div class="card d-flex flex-column h-100">
                            <div class="img-container d-flex" style="height: 20rem;">
                                <img src="${book.img}" class="img-fluid" style="object-fit: cover">
                            </div>
                            <p>Title : ${book.title}</p>
                            <button>Add to cart</button>
                         </div>`
        row.appendChild(col)
      })
    })
}

getBooks()
