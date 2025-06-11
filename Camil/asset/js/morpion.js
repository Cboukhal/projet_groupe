const lignes = document.querySelectorAll("#morpion tr");
const nombreColonnes = lignes[0].querySelectorAll("td").length;
const colonnes = {};

for (let col = 0; col < nombreColonnes; col++) {
    colonnes[(col + 1)] = [];
    for (let lig = 0; lig < lignes.length; lig++) {
        const cellule = lignes[lig].querySelectorAll("td")[col];
        colonnes[(col + 1)].push(cellule);
    }
}
function jouer(){
    for (let i = 0; i < dep.length; i++) {
        dep[i].addEventListener('click', () => {
            const symb = document.createElement('div');
            symb.className = 'x';
            dep[i].replaceWith(symb);
        });
    }
}
function symbole(){
    // let sym = 0;

    for (let i = 1; i <= nombreColonnes; i++)
        {
        for (let j = 0; j < colonnes[i].length; j++)
            {
            colonnes[i][j].addEventListener('click', ()=>{
                jouer();
        });
    }
}
}
symbole();