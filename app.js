const flagES = document.getElementById("ES")
const flagEN = document.getElementById("EN")


flagES.addEventListener("click", (e) => {
    changeLanguages(e.target.dataset.language)
})

flagEN.addEventListener("click", (e) => {
    changeLanguages(e.target.dataset.language)
})

const changeLanguages = async (language) => {
    const requestJSON = await fetch(`./languages/${language}.json`)
    const texts = await requestJSON.json()

    const textsToChange = document.querySelectorAll("[data-section]");

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = texts[section][value]
    }
}