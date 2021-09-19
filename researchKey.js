function focusResearchKey() {

    const inputResearchKey = document.querySelectorAll(".search-key");

    for (let i = 0; i < inputResearchKey.length; i++) {

        inputResearchKey[i].addEventListener('focus', () => {
            inputResearchKey[i].value = "";
            inputResearchKey[i].placeholder = `Rechercher un ${inputResearchKey[i].id}`;
        })

        inputResearchKey[i].addEventListener("blur", () => {
            inputResearchKey[i].value = inputResearchKey[i].id;
            inputResearchKey[i].placeholder = "";

        })
    }
}

focusResearchKey();