let arrayRecipes = [];
let arrayTrie = [];
let collectionDataRecipes = {
    ingredients: [], 
    ustensiles: [], 
    appareil: []
}

let inputSearch = document.getElementsByClassName("input-research")[0];
const containerRecipes = document.getElementsByClassName('recipes-container')[0];
const btnSearch = document.getElementsByClassName('icone-loupe')[0];
let inputValue = "";

function handleInput(e) {
    inputValue = e.target.value;

    if (inputValue.length < 3) {
        cleanDisplay();    
    }

    if (inputValue.length > 2) {
        cleanDisplay();    
        researchKeyWordl(inputValue);
        displayRecipes();
    }
}

function cleanDisplay() {

    arrayRecipes.length = 0;
    
    while (containerRecipes.firstChild) {
        containerRecipes.removeChild(containerRecipes.lastChild);
    }
};

function trie() {

    for (let i = 0; i < recipes.length; i++) {
        arrayTrie[i] = `${recipes[i].name}  + ${recipes[i].description} `;

        for (let j = 0; j < recipes[i].ingredients.length; j++) { 
            arrayTrie[i] += `${recipes[i].ingredients[j].ingredient} `;

            if (j === 0) {
                collectionDataRecipes.ingredients[i] = `${recipes[i].ingredients[j].ingredient} `;
            }

            else {
                collectionDataRecipes.ingredients[i] += `${recipes[i].ingredients[j].ingredient} `;
            }

        }
    }

};

function trieKeyWord() {

    for (let i = 0; i < recipes.length; i++ ) {

    collectionDataRecipes.appareil[i] = recipes[i].appliance;

        for (let j = 0; j < recipes[i].ustensils.length; j++) { 
    
            if (j === 0) {
                collectionDataRecipes.ustensiles[i] = `${recipes[i].ustensils[j]} `;
            }
    
            else {
                collectionDataRecipes.ustensiles[i] += `${recipes[i].ustensils[j]} `;
            }
    
        }
    }
}

function displayRecipes() {

    arrayRecipes.map(recipe => {

        const containerRecipe = document.createElement('div');
        containerRecipe.className = "recipe";
        containerRecipes.appendChild(containerRecipe);

        const divTitle = document.createElement('div');
        divTitle.textContent = recipe.name;
        containerRecipe.appendChild(divTitle);

        const divDescription = document.createElement('div');
        divDescription.textContent = recipe.description;
        containerRecipe.appendChild(divDescription);

        const divIngredient = document.createElement('div');

        for (let i = 0; i < recipe.ingredients.length; i++) {

            containerRecipe.textContent += ` ${recipe.ingredients[i].ingredient}`;
        }

        containerRecipe.appendChild(divIngredient);

    })

};

function researchKeyWordl(value) {

    for (let i = 0; i < arrayTrie.length; i++) {

        if (arrayTrie[i].includes(value)) {
    
            arrayRecipes.push(recipes[i]);
        }
    }

};

trie();
trieKeyWord();

inputSearch.addEventListener("input", (e) => {
    handleInput(e)

});


/* function researchKeyWordl(value) {

    for (let i = 0; i < recipes.length; i++) {

        if (recipes[i].description.includes(value)) {
            arrayRecipes.push(recipes[i]);
            continue;
        }

        else if (recipes[i].name.includes(value)) {
            arrayRecipes.push(recipes[i]);
            continue;
        } 

        else {

            for (let j = 0; j < recipes[i].ingredients.length; j++) {
    
                if (recipes[i].ingredients[j].ingredient.includes(value)) {
                    arrayRecipes.push(recipes[i]);
                    break;
                }
            }
        }
    }
}; */

