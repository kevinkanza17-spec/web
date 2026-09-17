let likeCount = 0;

function like() {
    likeCount++;

    document.getElementById("likeCount").textContent = likeCount;
}

const image = document.querySelector("#profileImage");
const input = document.querySelector("#inputFoto");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});

const tombolMusik = document.getElementById("tombolmusik");
const musik = document.getElementById("musik");
tombolMusik.addEventListener("click", () => {
    if (musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
});