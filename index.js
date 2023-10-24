document.getElementById("A").addEventListener("click", () => {
  document.getElementById("hideableA").style.visibility = "visible";
});
document.getElementById("B").addEventListener("click", () => {
  document.getElementById("hideableB").style.visibility = "visible";
});
document.getElementById("C").addEventListener("click", () => {
  document.getElementById("hideableC").style.visibility = "visible";
});

document.getElementById("hideA").addEventListener("click", () => {
  document.getElementById("hideableA").style.visibility = "hidden";
});
document.getElementById("hideB").addEventListener("click", () => {
  document.getElementById("hideableB").style.visibility = "hidden";
});
document.getElementById("hideC").addEventListener("click", () => {
  document.getElementById("hideableC").style.visibility = "hidden";
});
