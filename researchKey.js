function focusResearchKey() {

    const inputResearchKey = document.querySelectorAll(".search-key");

    for (let i = 0; i < inputResearchKey.length; i++) {

        inputResearchKey[i].addEventListener('focus', () => {
            inputResearchKey[i].value = "";
            inputResearchKey[i].placeholder = `Rechercher dans ${inputResearchKey[i].id}`;
            inputResearchKey[i].style.width = "300px";
            document.getElementsByClassName("fleche")[i].style.right = "10%";
        })

        inputResearchKey[i].addEventListener("blur", () => {
            inputResearchKey[i].value = inputResearchKey[i].id;
            inputResearchKey[i].placeholder = "";
            inputResearchKey[i].style.width = "200px";
            document.getElementsByClassName("fleche")[i].style.right = "20%";

        })
    }
}

focusResearchKey();