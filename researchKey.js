let isOpen = [true, true, true];
const inputResearchKey = document.querySelectorAll(".search-key");
const fleche = document.querySelectorAll(".fleche");
const tags = document.querySelectorAll('.container-tags');
const mainContainer = document.getElementsByClassName('main-container')[0];
let unitList = {
    ingredients: [],
    ustensiles: [],
    appareil: []
};

function createUnitList() {

    let k = 0;
    let l = 0;
    let m = 0;

     for (let i = 0; i < recipes.length; i++) {

        if (!(unitList.appareil.includes(recipes[i].appliance))) {
            unitList.appareil[m] = recipes[i].appliance;
            m++;
        }

        for (let j = 0; j< recipes[i].ingredients.length; j++) {

            if (!(unitList.ingredients.includes(recipes[i].ingredients[j].ingredient))) {
                unitList.ingredients[k] = recipes[i].ingredients[j].ingredient;
                k++;
            }
        }

        for (let j = 0; j< recipes[i].ustensils.length; j++) {

            if (!(unitList.ustensiles.includes(recipes[i].ustensils[j]))) {
                unitList.ustensiles[l] = recipes[i].ustensils[j];
                l++;
            }
        }
       
    } 
    
}

function displayTags() {

    const gridTags = document.createElement("div");
    gridTags.className = "grid-tags";
    tags[0].appendChild(gridTags);
    const tag = document.createElement('div');
    tag.className = "tag";
    tag.textContent = `${unitList.ingredients[0]} `;
    tags[0].appendChild(tag)

/*     tags[0].textContent = `${unitList.ingredients[0]} `;
 */    tags[1].textContent = `${unitList.ustensiles[0]} `;
    tags[2].textContent = `${unitList.appareil[0]} `;

    for (let j = 0; j < tags.length; j++) {

        if (j === 0) {
            for(let i = 1; i < unitList.ingredients.length; i++) {
/*                 tags[j].textContent += `${unitList.ingredients[i]} `;
 */
                const tag = document.createElement('div');
                tag.className = "tag";
                tag.textContent = `${unitList.ingredients[i]} `;
                tags[0].appendChild(tag)
            }
        }

        else if (j === 1) {
            for(let i = 1; i < unitList.ustensiles.length; i++) {
                tags[j].textContent += `${unitList.ustensiles[i]} `;
            }
        }

        else if (j === 2) {
            
            for(let i = 1; i < unitList.appareil.length; i++) {
                tags[j].textContent += `${unitList.appareil[i]} `;
            }
        }
    }

}

function closeResearchArea(i) {
    inputResearchKey[i].placeholder = "";
    inputResearchKey[i].style.width = "200px";
    fleche[i].style.right = "20%";
    fleche[i].src = "./logo/fleche-bas.svg";
    inputResearchKey[i].style.borderRadius = "5px";
    tags[i].style.display = "none";
}

function researchSingleKeyWord(array, value) {

    arrayRecipes.length = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i].toLowerCase().includes(value.toLowerCase())) {
    
            arrayRecipes.push(recipes[i]);
        }
    }
}

function handleInputKeywordl(e, i) {
    inputValue = e.target.value;

    if (inputValue.length < 3) {
        cleanDisplay();    
    }

    if (inputValue.length > 2) {
        cleanDisplay();   

        if (i === 0) {
            researchSingleKeyWord(collectionDataRecipes.ingredients, inputValue);
        }
        else if (i === 1) {
            researchSingleKeyWord(collectionDataRecipes.ustensiles, inputValue);
        }
        else {
            researchSingleKeyWord(collectionDataRecipes.appareil, inputValue);
        }
        
        displayRecipes();
    }
}

function focusResearchKey() {

    for (let i = 0; i < inputResearchKey.length; i++) {

        inputResearchKey[i].addEventListener('focus', () => {
            inputResearchKey[i].value = "";
            inputResearchKey[i].placeholder = `Rechercher dans ${inputResearchKey[i].id}`;
            inputResearchKey[i].style.width = "500px";
            fleche[i].style.right = "10%";
        })

        inputResearchKey[i].addEventListener("blur", () => {
            
                inputResearchKey[i].value = inputResearchKey[i].id;
                closeResearchArea(i);
        })

    }
}

function openResearchKey() {

    for (let i = 0; i < fleche.length; i++) {

        fleche[i].addEventListener("click", () => {

            if (isOpen[i]) {
                isOpen[i] = false;
                inputResearchKey[i].value = "";
                inputResearchKey[i].placeholder = `Rechercher dans ${inputResearchKey[i].id}`;
                inputResearchKey[i].style.width = "500px";
                inputResearchKey[i].style.borderRadius = "5px 5px 0 0";
                fleche[i].style.right = "10%";
                fleche[i].src = "./logo/fleche-haut.svg";
                tags[i].style.display = "flex";
            }

            else {
                isOpen[i] = true;
                inputResearchKey[i].value = inputResearchKey[i].id;
                closeResearchArea(i);
            };

         
        })
    }
}

function displayResearchKey() {

    for (let i = 0; i < inputResearchKey.length; i++) {

        inputResearchKey[i].addEventListener("input", (e) => {
            handleInputKeywordl(e, i)
        });
    }
}


focusResearchKey();
openResearchKey();
displayResearchKey();
createUnitList();
displayTags();



