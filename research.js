let newRecipes = [...recipes];
let arrayRecipes = [];
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

function displayRecipes() {

    arrayRecipes.map(recipe => {

        const containerRecipe = document.createElement('div');
        containerRecipe.className = "recipe";
        containerRecipes.appendChild(containerRecipe);

        const divTitle = document.createElement('div');
        containerRecipe.textContent = recipe.name;
        containerRecipe.appendChild(divTitle);

        const divIngredient = document.createElement('div');

        for (let i = 0; i < recipe.ingredients.length; i++) {

            containerRecipe.textContent += ` ${recipe.ingredients[i].ingredient}`;
        }
        containerRecipe.appendChild(divIngredient);


    })

};

function researchKeyWordl(value) {

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
};

inputSearch.addEventListener("input", (e) => {

    inputValue = e.target.value;

    if (inputValue.length > 2) {
        cleanDisplay();    
        researchKeyWordl(inputValue);
        displayRecipes();
    }

});

/* btnSearch.addEventListener('click', () => {
    cleanDisplay();    
}) */

