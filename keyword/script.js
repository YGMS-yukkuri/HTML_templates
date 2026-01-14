const pTag = document.querySelector("p")
function input() {
    const input = document.querySelector("#inner")
    pTag.textContent = input.value
}

function search() {
    const searchTxt = document.querySelector("#txt").value
    let temp = pTag.textContent;
    let newSpan = temp.replaceAll(searchTxt,`<span>${searchTxt}</span>`)
    pTag.innerHTML = newSpan;
    const spans = document.querySelectorAll("span")
    spans.forEach(element => {
        color = Math.random().toString(16).slice(-6)
        element.style.backgroundColor = `#${color}`
    });
}