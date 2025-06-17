const lignes = document.querySelectorAll("#morpion tr");
const nombreColonnes = lignes[0].querySelectorAll("td").length;
const colonnes = {};
const rejoue = document.getElementById('rejoue');
let sym = 0;
let fini = false;

for (let col = 0; col < nombreColonnes; col++) {
    colonnes[(col + 1)] = [];
    for (let lig = 0; lig < lignes.length; lig++) {
        const cellule = lignes[lig].querySelectorAll("td")[col];
        colonnes[(col + 1)].push(cellule);
    }
}
function jouer(i,j,sym){
    if(sym == 0)
        colonnes[i][j].innerHTML = "<div class='x'>X</div>";
    else
        colonnes[i][j].innerHTML = "<div class='o'>O</div>";
}

function egalite(){
    for (let i = 1; i <= nombreColonnes; i++)
        {
        for (let j = 0; j < colonnes[i].length; j++)
            {
                if(colonnes[i][j].textContent.trim() == "")
                    return false
                    return false          
            }
    }
    return true;
}

function game_over() {
    const lignesGagnantes = [
        // Lignes
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[3, 0], [3, 1], [3, 2]],

        // Colonnes
        [[1, 0], [2, 0], [3, 0]],
        [[1, 1], [2, 1], [3, 1]],
        [[1, 2], [2, 2], [3, 2]],

        // Diagonales
        [[1, 0], [2, 1], [3, 2]],
        [[1, 2], [2, 1], [3, 0]]
    ];

    for (let combinaison of lignesGagnantes) {
        const [a, b, c] = combinaison;

        const valA = colonnes[a[0]][a[1]].textContent.trim();
        const valB = colonnes[b[0]][b[1]].textContent.trim();
        const valC = colonnes[c[0]][c[1]].textContent.trim();

        if (valA !== "" && valA === valB && valA === valC) {
            document.getElementById("message").textContent = "Le joueur " + valA + " a gagné !";
            return true;
        }
    }

    return false;
}

function symbole(){
    for (let i = 1; i <= nombreColonnes; i++)
        {
        for (let j = 0; j < colonnes[i].length; j++)
            {
            colonnes[i][j].addEventListener('click', ()=>{
                if (fini == true) 
                    return;
                if (colonnes[i][j].textContent.trim() !== "") 
                    return;
                jouer(i,j,sym);
                fini = game_over();
                if(egalite()==true)
                if(egalite()==true && fini == false)
                {
                    document.getElementById("message").textContent = "Aucun joueur n'a gagné ! Vous êtes à égalité";
                    return;
                }
                if(sym == 0)
                    sym = 1;
                else
                    sym = 0;
                });     
            }
        }
}
function rejouer(){
    rejoue.addEventListener('click',()=>{
        for (let i = 1; i <= nombreColonnes; i++)
        {
        for (let j = 0; j < colonnes[i].length; j++)
            {
                colonnes[i][j].innerHTML = "";
            }
    }
    fini =false;
    document.getElementById("message").textContent = "";
    })  
}
symbole();
rejouer();
