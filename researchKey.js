let isOpen = [true, true, true];
const inputResearchKey = document.querySelectorAll(".search-key");
const fleche = document.querySelectorAll(".fleche");
const tags = document.querySelectorAll('.container-tags');

function focusResearchKey() {

    for (let i = 0; i < inputResearchKey.length; i++) {

        inputResearchKey[i].addEventListener('focus', () => {
            inputResearchKey[i].value = "";
            inputResearchKey[i].placeholder = `Rechercher dans ${inputResearchKey[i].id}`;
            inputResearchKey[i].style.width = "300px";
            fleche[i].style.right = "10%";
        })

        inputResearchKey[i].addEventListener("blur", () => {
            if (!isOpen[i]) {
                inputResearchKey[i].value = inputResearchKey[i].id;
                inputResearchKey[i].placeholder = "";
                inputResearchKey[i].style.width = "200px";
                fleche[i].style.right = "20%";
                fleche[i].src = "./logo/fleche-bas.svg";
                inputResearchKey[i].style.borderRadius = "5px";
                tags[i].style.display = "none";
            }
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
                inputResearchKey[i].style.width = "300px";
                inputResearchKey[i].style.borderRadius = "5px 5px 0 0";
                fleche[i].style.right = "10%";
                fleche[i].src = "./logo/fleche-haut.svg";
                tags[i].style.display = "grid";
            }

            else {
                isOpen[i] = true;
                inputResearchKey[i].value = inputResearchKey[i].id;
                inputResearchKey[i].placeholder = "";
                inputResearchKey[i].style.width = "200px";
                fleche[i].style.right = "20%";
                fleche[i].src = "./logo/fleche-bas.svg";
                inputResearchKey[i].style.borderRadius = "5px";
                tags[i].style.display = "none";
            };

         
        })
    }
}


focusResearchKey();
openResearchKey();


