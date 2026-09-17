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

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");
musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

const editButton = document.getElementById("editButton");

editButton.addEventListener("click", function() {
    const nama = prompt("Masukkan nama baru:");
    const nim = prompt("Masukkan NIM baru:");
    const deskripsi = prompt("Masukkan deskripsi baru:");
    const random = prompt("Masukkan random baru:");

    if (nama) {
        document.getElementById("profileName").textContent = nama;
    }

    if (nim) {
        document.getElementById("profileNIM").textContent = nim;
    }

    if (deskripsi) {
        document.getElementById("profileDescription").textContent = deskripsi;
    }

    if (random) {
        document.getElementById("profileRandom").textContent = random;
    }
});