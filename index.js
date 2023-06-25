var registers = document.querySelectorAll(".register");
// registers.forEach(function (item) {
//   item.classList.add("invisible");
// });
var logins = document.querySelectorAll(".login");
function swap() {
  registers.forEach(function (item) {
    item.classList.toggle("invisible");
  });
  logins.forEach(function (item) {
    item.classList.toggle("invisible");
  });
  console.log("swapping");
  console.log(logins);
}
