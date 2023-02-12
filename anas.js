(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  console.log(screen);
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (typeof value !== "undefined") {
        screen.value += value;
      }
    });
  });
  clear.addEventListener("click", function () {
    screen.value = "";
  });
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please Enter value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
})();
