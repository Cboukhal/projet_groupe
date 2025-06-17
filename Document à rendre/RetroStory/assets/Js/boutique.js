const annoncesData = [
    {
        categorie: "Console",
        titre: "Nintendo Game Boy Color",
        description: "Console portable mythique de 1998. Écran couleur, parfaite pour jouer à Pokémon et Zelda en déplacement.",
        prix: 45,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Super Mario Bros. 3 (NES)",
        description: "Cartouche originale du classique de 1988. L'un des meilleurs jeux de plateforme de tous les temps.",
        prix: 35,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "SEGA Genesis/Mega Drive",
        description: "Console 16-bit de SEGA avec 2 manettes. Blast processing garanti ! Fonctionne parfaitement.",
        prix: 75,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "The Legend of Zelda (NES)",
        description: "Cartouche dorée originale de 1986. Le jeu qui a lancé la saga Zelda, avec sa boîte.",
        prix: 65,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Nintendo 64",
        description: "Console révolutionnaire avec stick analogique. Vendue avec 4 manettes pour les soirées entre amis.",
        prix: 120,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Sonic the Hedgehog (Genesis)",
        description: "Le hérisson bleu dans son aventure originale de 1991. Vitesse et adrénaline garanties !",
        prix: 20,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "PlayStation 1 (PSX)",
        description: "Console Sony originale grise avec lecteur CD. Révolution 32-bit avec 2 manettes DualShock.",
        prix: 85,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Street Fighter II (SNES)",
        description: "Cartouche du célèbre jeu de combat. Hadoken et Shoryuken dans votre salon !",
        prix: 40,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Manette Nintendo 64 transparente",
        description: "Manette officielle Nintendo transparente bleue. Design iconique et état collector.",
        prix: 25,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "SEGA Dreamcast",
        description: "Dernière console SEGA, en avance sur son temps. Avec VMU et manette officielle.",
        prix: 95,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Final Fantasy VII (PlayStation)",
        description: "RPG légendaire sur 3 CD. Cloud, Sephiroth et une aventure inoubliable vous attendent.",
        prix: 45,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Game Boy Advance SP",
        description: "Console pliable avec écran rétroéclairé. Design compact et batterie rechargeable.",
        prix: 55,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Super Metroid (SNES)",
        description: "Chef-d'œuvre d'exploration spatiale. Atmosphère unique et gameplay parfait.",
        prix: 55,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Multitap PlayStation",
        description: "Adaptateur officiel Sony pour jouer à 4 joueurs. Parfait pour les jeux de sport et de combat.",
        prix: 15,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Atari 2600",
        description: "Console légendaire des années 70. Avec 10 cartouches classiques et 2 joysticks.",
        prix: 110,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Pokémon Rouge (Game Boy)",
        description: "Cartouche originale qui a lancé la Poképhérie. Attrapez-les tous dans Kanto !",
        prix: 30,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Memory Card PlayStation",
        description: "Carte mémoire officielle Sony 1MB. Sauvegardez vos parties de Final Fantasy et Metal Gear.",
        prix: 8,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Neo Geo Pocket Color",
        description: "Console portable premium de SNK. Rare et collector avec écran couleur de qualité.",
        prix: 145,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Chrono Trigger (SNES)",
        description: "RPG de Squaresoft considéré comme l'un des meilleurs jeux de tous les temps.",
        prix: 85,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Game Genie (NES)",
        description: "Dispositif de codes de triche pour NES. Transformez vos jeux préférés avec des codes secrets !",
        prix: 20,
        etat: "Très abîmé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    // 30 nouvelles annonces pour atteindre 50
    {
        categorie: "Console",
        titre: "Super Nintendo (SNES)",
        description: "Console 16-bit emblématique avec 2 manettes. Design iconique gris et violet, fonctionne parfaitement.",
        prix: 80,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "GoldenEye 007 (N64)",
        description: "FPS légendaire de 1997. Mode multijoueur à 4 joueurs en écran partagé, souvenirs garantis !",
        prix: 35,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Game Boy Original",
        description: "La première Game Boy de 1989. Écran monochrome vert, robuste et indestructible !",
        prix: 40,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Tetris (Game Boy)",
        description: "Le puzzle game addictif qui a accompagné la Game Boy. Cartouche grise originale.",
        prix: 18,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Nintendo GameCube",
        description: "Console cubique violette avec poignée de transport. 4 ports manettes, parfaite pour les soirées.",
        prix: 75,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Metal Gear Solid (PlayStation)",
        description: "Chef-d'œuvre de Hideo Kojima. Infiltration, action et histoire captivante sur 2 CD.",
        prix: 35,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Rumble Pak (N64)",
        description: "Accessoire de vibration pour Nintendo 64. Ajoutez du feedback tactile à vos jeux !",
        prix: 12,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "SEGA Saturn",
        description: "Console 32-bit de SEGA avec lecteur CD. Excellente pour les jeux de combat et les shmups.",
        prix: 120,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Super Mario World (SNES)",
        description: "Mario et Yoshi dans leur aventure colorée. Jeu de lancement parfait de la Super Nintendo.",
        prix: 30,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Pokémon Bleu (Game Boy)",
        description: "Version bleue du classique Pokemon. Complétez votre collection Kanto avec cette cartouche !",
        prix: 32,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "PlayStation 2 Slim",
        description: "Version allégée de la PS2. Compatible avec les jeux PS1 et PS2, lecteur DVD intégré.",
        prix: 65,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Donkey Kong Country (SNES)",
        description: "Aventure de Donkey Kong avec graphismes révolutionnaires. Musiques inoubliables de David Wise.",
        prix: 28,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Light Gun NES Zapper",
        description: "Pistolet optique orange pour NES. Parfait pour Duck Hunt et autres jeux de tir !",
        prix: 18,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Xbox Original",
        description: "Première console Microsoft avec disque dur intégré. Design massif noir et vert iconique.",
        prix: 55,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Castlevania: Symphony of the Night (PSX)",
        description: "Metroidvania gothique culte. Alucard dans son château plein de secrets et de boss épiques.",
        prix: 75,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Game Gear SEGA",
        description: "Console portable couleur de SEGA. Rival de la Game Boy avec un superbe écran LCD.",
        prix: 85,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Super Mario 64 (N64)",
        description: "Premier Mario en 3D ! Révolutionnaire avec sa caméra libre et ses 120 étoiles à collecter.",
        prix: 40,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Manette DualShock PlayStation",
        description: "Manette officielle Sony avec vibrations. Double stick analogique et croix directionnelle.",
        prix: 15,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Nintendo Entertainment System (NES)",
        description: "Console 8-bit légendaire qui a sauvé le jeu vidéo. Design gris iconique avec 2 manettes.",
        prix: 70,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Resident Evil 2 (PlayStation)",
        description: "Survival horror culte dans Raccoon City. Leon et Claire face aux zombies sur 2 CD.",
        prix: 42,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "The Legend of Zelda: Ocarina of Time (N64)",
        description: "Adventure épique de Link en 3D. Cartouche dorée collector avec boîte d'origine.",
        prix: 65,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "WonderSwan Color",
        description: "Console portable japonaise de Bandai. Rare en Europe, écran couleur de qualité.",
        prix: 125,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Mortal Kombat II (Genesis)",
        description: "Jeu de combat brutal avec les Fatalities. Version non censurée de la Genesis !",
        prix: 25,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Expansion Pak (N64)",
        description: "Extension mémoire pour Nintendo 64. Nécessaire pour Perfect Dark et Donkey Kong 64.",
        prix: 35,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "TurboGrafx-16",
        description: "Console 16-bit de NEC. Rare et recherchée, avec ses cartes de jeu HuCard uniques.",
        prix: 155,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Secret of Mana (SNES)",
        description: "Action-RPG de Square avec coopération à 3 joueurs. Musiques de Hiroki Kikuta inoubliables.",
        prix: 58,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "Crash Bandicoot (PlayStation)",
        description: "Marsupial orange dans ses premières aventures. Plateformes 3D et humour décalé !",
        prix: 22,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Console",
        titre: "Master System SEGA",
        description: "Console 8-bit de SEGA. Alternative à la NES avec d'excellent jeux comme Alex Kidd.",
        prix: 60,
        etat: "Usé",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
    },
    {
        categorie: "Jeu",
        titre: "F-Zero (SNES)",
        description: "Course futuriste à 300 km/h ! Mode 7 spectaculaire et bande sonore électronique.",
        prix: 24,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=300&fit=crop"
    },
    {
        categorie: "Accessoire",
        titre: "Super Game Boy (SNES)",
        description: "Adaptateur pour jouer aux jeux Game Boy sur Super Nintendo. Écran couleur et effets spéciaux !",
        prix: 28,
        etat: "Bon état",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    }
];

// Variables globales
let allAnnonces = [];

// Fonction pour créer une annonce
function createAnnonceElement(annonceData) {
    const annonce = document.createElement('div');
    annonce.classList.add('annonce');
    annonce.dataset.categorie = annonceData.categorie;
    annonce.dataset.etat = annonceData.etat;
    annonce.dataset.prix = annonceData.prix;
    annonce.dataset.titre = annonceData.titre.toLowerCase();
    annonce.dataset.description = annonceData.description.toLowerCase();

    const imageElement = document.createElement('img');
    imageElement.src = annonceData.image;
    imageElement.alt = annonceData.titre;

    const etatClass = annonceData.etat.toLowerCase().replace(/\s+/g, '').replace(/[éèê]/g, 'e').replace(/[àâä]/g, 'a');
    
    const details = document.createElement('div');
    details.classList.add('annonce-details');
    details.innerHTML = `
        <h3>${annonceData.titre} <span class="categorie-badge">(${annonceData.categorie})</span></h3>
        <p><strong>État :</strong> <span class="etat ${etatClass}">${annonceData.etat}</span></p>
        <p class="prix">${annonceData.prix} €</p>
        <p class="description">${annonceData.description}</p>
    `;

    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-vendeur-btn');
    contactButton.textContent = 'Contacter le vendeur';
    contactButton.addEventListener('click', (e) => {
        contactVendeur(annonceData);
    });
    details.appendChild(contactButton);
    annonce.appendChild(imageElement);
    annonce.appendChild(details);
    
    return annonce;
}

// Fonction pour afficher les annonces
function displayAnnonces(annonces) {
    const container = document.querySelector('#listeAnnonces');
    if (!container) {
        console.error('Container #listeAnnonces non trouvé !');
        return;
    }

    // Nettoyer le container
    container.innerHTML = '';

    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    if (annonces.length === 0) {
        if (noResults) noResults.style.display = 'block';
        if (resultsCount) resultsCount.textContent = '';
    } else {
        if (noResults) noResults.style.display = 'none';
        if (resultsCount) resultsCount.textContent = `${annonces.length} annonce(s) trouvée(s)`;
        
        annonces.forEach(annonceData => {
            const annonceElement = createAnnonceElement(annonceData);
            container.appendChild(annonceElement);
        });
    }
}

// Fonction de filtrage
function filterAnnonces() {
    const filterCategorie = document.getElementById('filterCategorie')?.value || '';
    const filterEtat = document.getElementById('filterEtat')?.value || '';
    const filterPrixMin = parseInt(document.getElementById('filterPrixMin')?.value) || 0;
    const filterPrixMax = parseInt(document.getElementById('filterPrixMax')?.value) || 999999;
    const filterRecherche = document.getElementById('filterRecherche')?.value.toLowerCase() || '';

    const filtered = allAnnonces.filter(annonce => {
        const matchCategorie = !filterCategorie || annonce.categorie === filterCategorie;
        const matchEtat = !filterEtat || annonce.etat === filterEtat;
        const matchPrix = annonce.prix >= filterPrixMin && annonce.prix <= filterPrixMax;
        const matchRecherche = !filterRecherche || 
            annonce.titre.toLowerCase().includes(filterRecherche) || 
            annonce.description.toLowerCase().includes(filterRecherche);

        return matchCategorie && matchEtat && matchPrix && matchRecherche;
    });

    displayAnnonces(filtered);
}

// Fonction pour effacer les filtres
function clearFilters() {
    const filterElements = [
        'filterCategorie', 'filterEtat', 'filterPrixMin', 
        'filterPrixMax', 'filterRecherche'
    ];
    
    filterElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
    
    displayAnnonces(allAnnonces);
}

// Fonction pour contacter le vendeur (exemple simple)
function contactVendeur(annonceData) {
    // Trouver l'élément d'annonce parent
    const annonceElement = document.querySelector(`.annonce[data-titre="${annonceData.titre.toLowerCase()}"]`);

    if (!annonceElement) {
        console.error("Élément d'annonce non trouvé pour afficher le formulaire.");
        return;
    }

    // Vérifier si un formulaire de contact existe déjà pour cette annonce
    if (annonceElement.querySelector('.contact-form-container')) {
        return; // Ne pas ajouter plusieurs formulaires
    }

    const formContainer = document.createElement('div');
    formContainer.classList.add('contact-form-container');
    formContainer.style.marginTop = '15px';
    formContainer.style.padding = '10px';
    formContainer.style.border = '1px solid #ccc';
    formContainer.style.backgroundColor = '#f9f9f9';
    formContainer.style.borderRadius = '5px';

    const messageLabel = document.createElement('label');
    messageLabel.textContent = `Envoyer un message concernant "${annonceData.titre}" :`;
    messageLabel.style.display = 'block';
    messageLabel.style.marginBottom = '5px';
    messageLabel.style.fontWeight = 'bold';

    const textarea = document.createElement('textarea');
    textarea.placeholder = "Écrivez votre message ici...";
    textarea.rows = 4;
    textarea.style.width = 'calc(100% - 20px)'; // Ajuster pour le padding
    textarea.style.marginBottom = '10px';
    textarea.style.padding = '8px';
    textarea.style.border = '1px solid #ccc';
    textarea.style.borderRadius = '4px';
    textarea.style.boxSizing = 'border-box'; // Inclure padding dans la largeur

    const buttonContainer = document.createElement('div');
    buttonContainer.style.textAlign = 'right';

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Envoyer le message';
    sendButton.classList.add('send-message-btn');
    sendButton.style.marginRight = '5px';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Annuler';
    cancelButton.classList.add('cancel-message-btn');
    cancelButton.style.backgroundColor = '#ccc';
    cancelButton.style.color = '#333';

    // Event listeners
    sendButton.addEventListener('click', () => {
        const messageText = textarea.value.trim();
        if (messageText) {
            alert(`Message envoyé pour "${annonceData.titre}" :\n\n${messageText}`);
            formContainer.remove(); // Fermer le formulaire après envoi (simulé)
        } else {
            alert("Votre message ne peut pas être vide.");
        }
    });

    cancelButton.addEventListener('click', () => {
        formContainer.remove(); // Fermer le formulaire
    });

    // Assembler le formulaire
    formContainer.appendChild(messageLabel);
    formContainer.appendChild(textarea);
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(sendButton);
    formContainer.appendChild(buttonContainer);

    // Insérer le formulaire après les détails de l'annonce
    annonceElement.appendChild(formContainer);

    // Optionnel : faire défiler jusqu'au formulaire et focus le textarea
    formContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    textarea.focus();
}

// Chargement initial des annonces
function loadInitialAnnonces() {
    allAnnonces = [...annoncesData];
    displayAnnonces(allAnnonces);
}

// Fonction d'initialisation
function initializeBoutique() {
    // Chargement initial
    loadInitialAnnonces();
    
    // Ajout des événements pour les filtres
    const filterElements = [
        { id: 'filterCategorie', event: 'change' },
        { id: 'filterEtat', event: 'change' },
        { id: 'filterPrixMin', event: 'input' },
        { id: 'filterPrixMax', event: 'input' },
        { id: 'filterRecherche', event: 'input' }
    ];
    
    filterElements.forEach(({ id, event }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener(event, filterAnnonces);
        }
    });

    // Bouton pour effacer les filtres
    const clearButton = document.getElementById('clearFilters');
    if (clearButton) {
        clearButton.addEventListener('click', clearFilters);
    }

    // Gestion du formulaire
    const form = document.getElementById('formVente');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const categorie = document.getElementById('categorie')?.value;
            const titre = document.getElementById('titre')?.value;
            const description = document.getElementById('description')?.value;
            const prix = parseInt(document.getElementById('prix')?.value);
            const etat = document.getElementById('etat')?.value;
            const imageInput = document.getElementById('image');

            if (!categorie || !titre || !description || !prix || !etat) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }

            let imageSrc = "https://via.placeholder.com/300x300?text=Pas+d'image";
            
            const nouvelleAnnonce = {
                categorie,
                titre,
                description,
                prix,
                etat,
                image: imageSrc
            };

            if (imageInput && imageInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    nouvelleAnnonce.image = event.target.result;
                    allAnnonces.unshift(nouvelleAnnonce);
                    filterAnnonces();
                };
                reader.readAsDataURL(imageInput.files[0]);
            } else {
                allAnnonces.unshift(nouvelleAnnonce);
                filterAnnonces();
            }

            form.reset();
        });
    }
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initializeBoutique);

// Export pour utilisation en module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { annoncesData, initializeBoutique };
}