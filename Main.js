const dark = document.getElementById("dark");
dark.onclick = function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
const light = document.getElementById("light");
  light.onclick = function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  }
document.getElementById("VQMM").onclick = function() {
  window.location.href = "/Games/VQMM.html";
}