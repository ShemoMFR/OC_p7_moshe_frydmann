let arrayRecipes = [];
let arrayTrie = [];
let error = document.querySelector(".error-result");
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
        arrayTrie[i] = `${recipes[i].name} + ${recipes[i].description} `;

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

        const containerRecipe = document.createElement("div");
        containerRecipe.className = "containerRecipe";

        const divPhoto = document.createElement("div");
        divPhoto.className = "recipe-photo";

        const containerText = document.createElement('div');
        containerText.className = "recipe";

        const containerTitle = document.createElement('div');
        containerTitle.className = "recipe-title";
        const name = document.createElement("div");
        name.textContent = recipe.name;

        const timeImg = document.createElement('img');
        timeImg.className = "timeImg";
        timeImg.src = "./logo/time.png";
        const time = document.createElement("div");
        time.className = "time";
        time.textContent = `${recipe.time}min`;

        containerTitle.appendChild(name);
        containerTitle.appendChild(timeImg);
        containerTitle.appendChild(time);

        const containerDescription = document.createElement("div");
        containerDescription.className = "recipe-description";
        const containerIngredients = document.createElement("div");
        containerIngredients.className = "recipe-ingredients"

        containerText.appendChild(containerIngredients);    
        containerText.appendChild(containerDescription);

        containerRecipe.appendChild(divPhoto);
        containerRecipe.appendChild(containerTitle);
        containerRecipe.appendChild(containerText);

        
        containerRecipes.appendChild(containerRecipe);       


        const divIngredient = document.createElement('div');

        for (let i = 0; i < recipe.ingredients.length; i++) {

            console.log(recipe.ingredients[i].quantity)
            console.log(recipe.ingredients[i].unit)


            containerIngredients.innerHTML += `<strong> ${recipe.ingredients[i].ingredient} : ${recipe.ingredients[i].quantity ? recipe.ingredients[i].quantity : "" } ${recipe.ingredients[i].unit ? recipe.ingredients[i].unit : ""} </br>`;
        }

        containerText.appendChild(divIngredient);
        containerDescription.textContent = `${recipe.description}`
    })

    if (arrayRecipes.length == 0) {
        error.textContent = "Aucune recette ne correspond à votre recherche";
        error.style.display = "block";
    }
    else {
        error.textContent = "";
        error.style.display = "none";
    }

};

function researchKeyWordl(value) {

    for (let i = 0; i < arrayTrie.length; i++) {

        if (arrayTrie[i].toLowerCase().includes(value.toLowerCase())) {
            arrayRecipes.push(recipes[i]);
        }
    }

};

trie();
trieKeyWord();

inputSearch.addEventListener("input", (e) => {
    handleInput(e)

});




