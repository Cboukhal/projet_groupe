const lignes = document.querySelectorAll("#dames tr");
let pionsNoirs = document.querySelectorAll("#dames div.pion-noir");
const pionsBlancs = document.querySelectorAll("#dames div.pion-blanc");
const nombreColonnes = lignes[0].querySelectorAll("td").length;
const colonnes = {};

for (let col = 0; col < nombreColonnes; col++) {
    colonnes[(col + 1)] = [];
    for (let lig = 0; lig < lignes.length; lig++) {
        const cellule = lignes[lig].querySelectorAll("td")[col];
        colonnes[(col + 1)].push(cellule);
    }
}

function deplacerPion(i, j) {
    colonnes[i+1][j+1].innerHTML = `<div class="deplacement"></div>`;
    colonnes[i-1][j+1].innerHTML = `<div class="deplacement"></div>`;
    const dep = document.querySelectorAll('.deplacement');

    for (let i = 0; i < dep.length; i++) {
        dep[i].addEventListener('click', () => {
            const nouveauPion = document.createElement('div');
            nouveauPion.className = 'pion-noir';
            dep[i].replaceWith(nouveauPion);
            for(i=0; i < dep.length; i++)
                dep[i].remove();
        });
    }
}

function pion(){
    let dep = false;
    let couleur = 0;
    for (let i = 0; i < pionsNoirs.length; i++)
        {
            pionsNoirs[i].addEventListener('click', ()=>{
            dep = true;
            couleur = 0;
            });
        }
    for (let i = 0; i < pionsBlancs.length; i++)
        {
            pionsBlancs[i].addEventListener('click', ()=>{
            dep = true;
            couleur = 1;
            });
        }
    for (let i = 1; i <= nombreColonnes; i++)
        {
        for (let j = 0; j < colonnes[i].length; j++)
            {
            colonnes[i][j].addEventListener('click', ()=>{
                if (dep === true && couleur === 0)
                    {
                    deplacerPion(i,j);
                    }
                if (dep === true && couleur === 1)
                    {
                    deplacerPion(i,j);
                    }
            dep = false;
        });
    }
}
}
pion();
