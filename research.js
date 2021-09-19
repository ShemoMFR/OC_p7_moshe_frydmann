let newRecipes = [...recipes];
let arrayRecipes = [];
let arrayTest = [];
let collectionDataRecipes = {
    ingredients: [], 
    ustensiles: [], 
    appareil: []
}

let inputSearch = document.getElementsByClassName("input-research")[0];
const containerRecipes = document.getElementsByClassName('recipes-container')[0];
const btnSearch = document.getElementsByClassName('icone-loupe')[0];
let inputValue = "";

function cleanDisplay() {

    arrayRecipes.length = 0;
    
    while (containerRecipes.firstChild) {
        containerRecipes.removeChild(containerRecipes.lastChild);
    }
};

function trie() {

    for (let i = 0; i < newRecipes.length; i++) {
        arrayTest[i] = `${newRecipes[i].name}  + ${newRecipes[i].description} `;

        for (let j = 0; j < newRecipes[i].ingredients.length; j++) { 
            arrayTest[i] += `${newRecipes[i].ingredients[j].ingredient} `;

            if (j === 0) {
                collectionDataRecipes.ingredients[i] = `${newRecipes[i].ingredients[j].ingredient} `;
            }

            else {
                collectionDataRecipes.ingredients[i] += `${newRecipes[i].ingredients[j].ingredient} `;
            }

        }
    }

    //console.log(arrayTest)


};

function trieUstensils() {

    for (let i = 0; i < newRecipes.length; i++ ) {

    collectionDataRecipes.appareil[i] = newRecipes[i].appliance;

        for (let j = 0; j < newRecipes[i].ustensils.length; j++) { 
    
            if (j === 0) {
                collectionDataRecipes.ustensiles[i] = `${newRecipes[i].ustensils[j]} `;
            }
    
            else {
                collectionDataRecipes.ustensiles[i] += `${newRecipes[i].ustensils[j]} `;
            }
    
        }
    }


    //console.log(collectionDataRecipes.ustensiles)
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

    for (let i = 0; i < arrayTest.length; i++) {

        if (arrayTest[i].includes(value)) {
    
            arrayRecipes.push(newRecipes[i]);
        }
    }

};


trie();
trieUstensils();

inputSearch.addEventListener("input", (e) => {

    inputValue = e.target.value;

    if (inputValue.length < 3) {
        cleanDisplay();    
    }

    if (inputValue.length > 2) {
        cleanDisplay();    
        researchKeyWordl(inputValue);
        displayRecipes();
    }

});

/* function researchKeyWordl(value) {

    for (let i = 0; i < newRecipes.length; i++) {

        if (newRecipes[i].description.includes(value)) {
            arrayRecipes.push(newRecipes[i]);
            continue;
        }

        else if (newRecipes[i].name.includes(value)) {
            arrayRecipes.push(newRecipes[i]);
            continue;
        } 

        else {

            for (let j = 0; j < newRecipes[i].ingredients.length; j++) {
    
                if (newRecipes[i].ingredients[j].ingredient.includes(value)) {
                    arrayRecipes.push(newRecipes[i]);
                    break;
                }
            }
        }
    }
}; */

