const huruf = ["A", "B", "C", "D", "E"];
const ket = document.getElementById("alpha");
const result = document.getElementById("hasil");

function pengacak() {
  ket.innerHTML = "Yang harus anda pilih adalah...";
  result.innerHTML = huruf[Math.floor(Math.random() * huruf.length)];
}