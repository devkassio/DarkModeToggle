const inputEl = document.querySelector(".input");

inputEl.checked = JSON.parse(localStorage.getItem("darkMode")) || false;

function updateBody() {
    if (inputEl.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

}

updateBody();

function updateLocalStorage() {
    localStorage.setItem("darkMode", JSON.stringify(inputEl.checked));
}

inputEl.addEventListener("change", () => {
    updateBody();
    updateLocalStorage();
});



/*
function updateBody() {
    if (inputEl.checked) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}*/