const URLMain = "https://api.escuelajs.co/api/v1/products";
const btnAgregar = document.getElementById("btnAgregar");
const mainProds = document.getElementById("mainProds");

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();

  const options = { "method": "GET" };

  fetch(URLMain, options)
    .then((response) => {
      console.log(response);

      response.json().then((res) => {
        console.log(res[0].title);

        modifyCards(res);
      });

    })
    .catch();

});//btnAgregar

function modifyCards(prods) {
  const cards = document.querySelectorAll("#mainProds .col"); // todas las tarjetas

  for (let i = 0; i < cards.length && i < prods.length; i++) {

    const producto = prods[i];
    const card = cards[i];

    //Modificamos la imagen
    const img = card.querySelector("svg");
    const newImg = document.createElement("img");
    newImg.src = producto.images[1];
    newImg.className = "card-img-top";
    newImg.alt = producto.title;
    newImg.width = "100%";
    newImg.height = 225;
    newImg.setAttribute("referrerpolicy", "no-referrer");
    img.replaceWith(newImg);

    //Agregamos el titulo
    const titulo = card.querySelector(".card-body");
    titulo.insertAdjacentHTML("afterbegin",
      `<p style="font-weight: bold;">${producto.title}</p>`
    );

    //Modificamos la descripcion
    const descripcion = card.querySelector(".card-text");
    descripcion.innerText = producto.description;

    //Modificamos los precios
    const precios = card.querySelector(".text-body-secondary");
    precios.innerText = "$" + producto.price;


  }
}