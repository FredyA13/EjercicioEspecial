const URLMain = "https://api.escuelajs.co/api/v1/products";
const btnAgregar = document.getElementById("btnAgregar");
const mainProds = document.getElementById("mainProds");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();

    const options = {"method": "GET"};

    fetch(URLMain, options)
                .then((response) =>{
                    console.log(response);

                    response.json().then((res) =>{
                        console.log(res[0].title);
                        
                        //createCards(res);
                    });

                })
                .catch()

});//btnAgregar

function createCards(prods){

    for (let i = 0; i < prods.length; i++) {
        const producto = prods[i];

        mainProds.insertAdjacentHTML("beforeend",
            `<div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <h5>${producto.title}</h5>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$ price</small>
              </div>
            </div>
          </div>
        </div>`
        );
    }
}//CreateCards