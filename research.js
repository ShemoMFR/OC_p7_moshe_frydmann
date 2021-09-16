let newRecipes = [...recipes];
let inputSearch = document.getElementsByClassName("input-research")[0];
let inputValue = "";

function researchKeyWordl(value) {

    let arrayRecipes = [];

    for (let i = 0; i < newRecipes.length; i++) {

        if (newRecipes[i].description.includes(value)) {
            arrayRecipes.push(newRecipes[i]);
        }

        if (newRecipes[i].name.includes(value)) {
            arrayRecipes.push(newRecipes[i]);
        } 
 
        for (let j = 0; j < newRecipes[i].ingredients.length; j++) {

            if (newRecipes[i].ingredients[j].ingredient.includes(value)) {
                arrayRecipes.push(newRecipes[i]);
                break;
            }
        }
    }

    console.log(arrayRecipes)


};

inputSearch.addEventListener("input", (e) => {

    inputValue = e.target.value;

    if (inputValue.length > 2) {
        researchKeyWordl(inputValue);
    }

});