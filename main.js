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
                            <p class="mx-4 text-center">Title : ${book.title}</p>
                            <button class="add-to-cart">Add to cart</button>
                         </div>`
        row.appendChild(col)
        const btnsAddToCart = document.querySelectorAll(".add-to-cart")
        for(let i=0; i< btnsAddToCart.length; i++){
          btnsAddToCart[i].addEventListener("click", function(event){
            console.log(event.target.closest(".card"))
          })
        }
      })
    })
}

getBooks()


window.onload = () => {
  
  

}