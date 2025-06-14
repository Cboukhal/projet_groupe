// Comptes existants
    const users = [
      { prenom: "Stanley", nom: "Guidez", age: 22, email: "stan@mail.com", password: "stan123" },
      { prenom: "Ludovic", nom: "a", age: 1, email: "ludo@mail.com", password: "ludo123" },
      { prenom: "Camil", nom: "a", age: 1, email: "camil@mail.com", password: "camil123" },
      { prenom: "Julien", nom: "a", age: 1, email: "julien@mail.com", password: "julien123" }
    ];

    function login(){
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();
      const user = users.find(u => u.email == email && u.password == password); //verifier si un compte possède le mail et le mot de passe
      if(user){
        showMessage("Connexion réussie ! Bienvenue " + user.prenom + " " + user.nom);
      }else{
        showMessage("Échec de la connexion. Email ou mot de passe incorrect.");
      }
    }

    function register(){
      const prenom = document.getElementById("reg-prenom").value.trim();
      const nom = document.getElementById("reg-nom").value.trim();
      const age = parseInt(document.getElementById("reg-age").value);
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value.trim();

      if (!prenom || !nom || !age || !email || !password) {
        showMessage("Veuillez remplir tous les champs.");
        return;
       }

      const exists = users.some(u => u.email == email); //trouvé un mail existant
      if(exists){
        showMessage("Ce mail est déjà utilisé.");
      }else {
        users.push({ prenom, nom, age, email, password });
        showMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      }
    }

    function showMessage(msg) {
  console.log("Message affiché:", msg); // DEBUG

  let popup = document.createElement("div");
  popup.className = "popup show";
  popup.innerText = msg;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}