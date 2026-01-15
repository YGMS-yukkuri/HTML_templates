let isNight = false
const div = document.querySelectorAll("div")

const change = () => {
    if(isNight){
        isNight = false;
        div[0].style.display = "flex";
        div[1].style.display = "none";
    }
    else {
        isNight = true;
        div[0].style.display = "none";
        div[1].style.display = "flex";
    }
}