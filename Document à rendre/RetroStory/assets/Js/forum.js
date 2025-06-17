document.addEventListener('DOMContentLoaded', () => {
    const forumSection = document.querySelector('.forum');
    const newThreadForm = document.getElementById('threadForm');

    // Données initiales du forum avec des sujets et des réponses
    let threads = [
        {
            id: 'thread-1699880000000', // Exemple d'ID unique
            title: "Bienvenue sur le Forum Rétro !",
            message: "Discutez ici de vos jeux et consoles rétro préférés. Partagez vos souvenirs et astuces !",
            user: "Admin",
            timestamp: new Date(1699880000000).toLocaleString(),
            replies: [
                {
                    id: 'reply-1699880100000',
                    parentId: 'thread-1699880000000',
                    text: "Super initiative ! J'adore les jeux rétro.",
                    user: "JoueurFan",
                    timestamp: new Date(1699880100000).toLocaleString(),
                    replies: [
                        {
                            id: 'reply-1699880200000',
                            parentId: 'reply-1699880100000',
                            text: "Moi aussi ! Quel est ton jeu préféré ?",
                            user: "RetroGamer",
                            timestamp: new Date(1699880200000).toLocaleString(),
                            replies: []
                        }
                    ]
                },
                {
                    id: 'reply-1699880300000',
                    parentId: 'thread-1699880000000',
                    text: "Ma console préférée reste la SNES, indétrônable !",
                    user: "SNESForever",
                    timestamp: new Date(1699880300000).toLocaleString(),
                    replies: []
                }
            ]
        },
        {
            id: 'thread-1699880400000',
            title: "Quel est votre console rétro de prédilection ?",
            message: "NES, SNES, Mega Drive, PlayStation... Laquelle a votre coeur et pourquoi ?",
            user: "ConsoleMaster",
            timestamp: new Date(1699880400000).toLocaleString(),
            replies: [
                {
                    id: 'reply-1699880500000',
                    parentId: 'thread-1699880400000',
                    text: "Difficile à dire, mais la PS1 a une place spéciale pour ses RPGs.",
                    user: "RPGKing",
                    timestamp: new Date(1699880500000).toLocaleString(),
                    replies: []
                }
            ]
        },
        {
            id: 'thread-1699880600000',
            title: "Partagez vos meilleurs souvenirs de jeux d'arcade !",
            message: "Quels jeux vous ont ruiné en pièces de monnaie mais vous ont offert des heures de fun ?",
            user: "ArcadeHero",
            timestamp: new Date(1699880600000).toLocaleString(),
            replies: []
        }
    ];

    function generateId() {
        return `id-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 5)}`;
    }

    // Fonction récursive pour trouver un item (sujet ou réponse) et y ajouter une réponse
    function findItemAndAddReply(items, parentId, newReply) {
        for (let item of items) {
            if (item.id === parentId) {
                item.replies.unshift(newReply); // Ajoute les nouvelles réponses au début
                return true;
            }
            if (item.replies && item.replies.length > 0) {
                if (findItemAndAddReply(item.replies, parentId, newReply)) {
                    return true;
                }
            }
        }
        return false;
    }

    function addReplyToData(parentId, text, user) {
        const newReply = {
            id: generateId(),
            parentId: parentId,
            text: text,
            user: user || "Utilisateur Anonyme",
            timestamp: new Date().toLocaleString(),
            replies: []
        };

        if (!findItemAndAddReply(threads, parentId, newReply)) {
            console.error("Élément parent non trouvé pour la réponse:", parentId);
        }
        renderForum(); // Re-génère l'affichage du forum
    }

    function createReplyForm(parentId, container) {
        const existingForm = container.querySelector('.reply-form-container');
        if (existingForm) {
            existingForm.remove();
        }

        const formContainer = document.createElement('div');
        formContainer.classList.add('reply-form-container');
        formContainer.style.marginTop = '10px';
        formContainer.style.marginLeft = '20px';

        const textarea = document.createElement('textarea');
        textarea.placeholder = "Votre réponse...";
        textarea.rows = 3;
        textarea.style.width = 'calc(100% - 22px)';
        textarea.style.marginBottom = '5px';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = "Votre nom (optionnel)";
        nameInput.style.marginBottom = '5px';
        nameInput.style.marginRight = '5px';

        const submitButton = document.createElement('button');
        submitButton.textContent = "Envoyer";
        submitButton.type = 'button';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = "Annuler";
        cancelButton.type = 'button';
        cancelButton.style.marginLeft = '5px';

        submitButton.addEventListener('click', () => {
            const replyText = textarea.value.trim();
            const userName = nameInput.value.trim() || "Utilisateur Anonyme";
            if (replyText) {
                addReplyToData(parentId, replyText, userName);
                formContainer.remove();
            } else {
                alert("La réponse ne peut pas être vide.");
            }
        });

        cancelButton.addEventListener('click', () => {
            formContainer.remove();
        });

        formContainer.appendChild(textarea);
        formContainer.appendChild(nameInput);
        formContainer.appendChild(submitButton);
        formContainer.appendChild(cancelButton);
        container.appendChild(formContainer);
        textarea.focus();
    }

    function createMessageElement(item, isThread = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(isThread ? 'thread' : 'reply');
        if (!isThread) {
            messageDiv.style.marginLeft = '20px';
            messageDiv.style.borderLeft = '2px solid #eee';
            messageDiv.style.paddingLeft = '10px';
            messageDiv.style.marginTop = '10px';
        }

        const header = document.createElement('div');
        header.classList.add('message-header');

        if (isThread) {
            const h3 = document.createElement('h3');
            h3.textContent = item.title;
            header.appendChild(h3);
        }

        const meta = document.createElement('p');
        meta.classList.add('meta');
        meta.innerHTML = `Posté par <strong>${item.user}</strong> le ${item.timestamp}`;
        header.appendChild(meta);

        const contentP = document.createElement('p');
        contentP.textContent = isThread ? item.message : item.text;

        const replyButton = document.createElement('button');
        replyButton.textContent = isThread ? "Répondre au sujet" : "Répondre";
        replyButton.classList.add('reply-button');
        replyButton.style.marginTop = '5px';
        replyButton.addEventListener('click', (e) => {
            e.stopPropagation();
            createReplyForm(item.id, messageDiv);
        });

        messageDiv.appendChild(header);
        messageDiv.appendChild(contentP);
        messageDiv.appendChild(replyButton);

        const repliesContainer = document.createElement('div');
        repliesContainer.classList.add('replies-container');
        messageDiv.appendChild(repliesContainer);

        if (item.replies && item.replies.length > 0) {
            item.replies.forEach(reply => {
                const replyElement = createMessageElement(reply, false);
                repliesContainer.appendChild(replyElement);
            });
        }
        return messageDiv;
    }

    function renderForum() {
        if (!forumSection) {
            console.error("La section du forum est introuvable !");
            return;
        }
        forumSection.innerHTML = ''; // Efface le contenu précédent

        threads.forEach(thread => {
            const threadElement = createMessageElement(thread, true);
            forumSection.appendChild(threadElement);
        });
    }

    if (newThreadForm) {
        newThreadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('titre').value.trim();
            const message = document.getElementById('message').value.trim();
            // Récupérer le nom de l'utilisateur depuis un champ input (à ajouter dans le HTML)
            const user = document.getElementById('user')?.value.trim() || "Auteur Anonyme";

            if (title && message) {
                const newThread = {
                    id: generateId(),
                    title: title,
                    message: message,
                    user: user,
                    timestamp: new Date().toLocaleString(),
                    replies: []
                };
                threads.unshift(newThread); // Ajoute les nouveaux sujets au début
                renderForum();
                newThreadForm.reset();
            } else {
                alert("Le titre et le message ne peuvent pas être vides.");
            }
        });
    } else {
        console.warn("Le formulaire de création de sujet est introuvable.");
    }

    // Affichage initial du forum
    renderForum();
});