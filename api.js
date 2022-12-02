const maincontent = document.getElementById("Main-container");
const btn = document.getElementById("btn");

const url ='https://thesimpsonsquoteapi.glitch.me/quotes';

fetch(url)
  .then(response => response.json())
  .then(data => {
    createCard(data[0])
  })
  .catch(err => console.error(err));

function createCard(data) {

  const {character, quote, image} = data;

  const card = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const quotecharater = document.createElement("p");
 

  title.textContent = character;
  img.src = image;
  img.alt = image;
  quote.textContent = quotecharater;
 

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(quotecharater);

  card.classList.add("card");
 
  maincontent.appendChild(card);
}

// btn.onclick;
// window.location.reload();

btn.addEventListener("click", ()=>{
  window.location.reload();
})
