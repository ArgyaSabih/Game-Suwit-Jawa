function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player === comp) return "Kamu SERI!";
  if (player === "gajah") return comp === "semut" ? "Kamu Kalah!" : "Kamu Menang!";
  if (player === "semut") return comp === "orang" ? "Kamu Kalah!" : "Kamu Menang!";
  if (player === "orang") return comp === "gajah" ? "Kamu Kalah!" : "Kamu Menang!";
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "./assets/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "./assets/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "./assets/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

function acak() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const WaktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - WaktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "./assets/" + gambar[i] + ".png");
    i += 1;
    if (i === gambar.length) i = 0;
    const info = document.querySelector(".info");
    info.innerHTML = "...";
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (imgPilihan) {
  imgPilihan.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = imgPilihan.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    acak();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "./assets/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
