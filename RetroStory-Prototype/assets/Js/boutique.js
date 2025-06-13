const form = document.getElementById('formVente');
const listeAnnonces = document.getElementById('listeAnnonces');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const categorie = document.getElementById('categorie').value;
    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;
    const prix = document.getElementById('prix').value;
    const etat = document.getElementById('etat').value;
    const imageInput = document.getElementById('image');

    const annonce = document.createElement('div');
    annonce.classList.add('annonce');

    const imageElement = document.createElement('img');
    if (imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imageElement.src = event.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        imageElement.src = "https://via.placeholder.com/150";
    }

    const details = document.createElement('div');
    details.classList.add('annonce-details');
    details.innerHTML = `
        <h3>${titre} (${categorie})</h3>
        <p><strong>État :</strong> ${etat}</p>
        <p><strong>Prix :</strong> ${prix} €</p>
        <p>${description}</p>
    `;

    annonce.appendChild(imageElement);
    annonce.appendChild(details);
    listeAnnonces.appendChild(annonce);

    form.reset();
});