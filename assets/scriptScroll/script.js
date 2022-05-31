window.addEventListener("scroll", muncul);

function muncul() {
    let elements = document.querySelectorAll(".card");
    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 150;
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("tampil");
        } else {
            elements[i].classList.remove("tampil");
        }
    }
}