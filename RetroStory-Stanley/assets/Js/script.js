const images = document.querySelectorAll("#slider img");
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
    img.style.transition = "opacity 1s ease-in-out";
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

setInterval(nextImage, 4000); // Change toutes les 4s
showImage(current);


const menuJeux = document.getElementById("menu-jeux");
  const sousmenu = menuJeux.querySelector(".sousmenu");

  menuJeux.addEventListener("mouseenter", () => {
    sousmenu.style.display = "block";
  });

  menuJeux.addEventListener("mouseleave", () => {
    sousmenu.style.display = "none";
  });




//-------------------------contact
const champs = document.querySelectorAll('.contact input, .contact textarea');
for(let champ of champs){
  champ.addEventListener("focus", ()=>{
    champ.style.backgroundColor='orange';
  });
}
for(let champ of champs){
  champ.addEventListener("blur", ()=>{
    champ.style.backgroundColor = 'white';
  });
}

  const form= document.querySelector('.contact form');
  const reussi = document.querySelector('.reussi')
  form.addEventListener("submit", (element)=>{
    element.preventDefault();
    reussi.style.display="block";
    
    setTimeout(()=>{
    reussi.remove();
    }, 5000);
  });
  