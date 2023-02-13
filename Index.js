(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".equal");
  let removeOneCharacterBtn = document.querySelector(".btn-remove");
  let clear = document.querySelector(".btn-clear");

  removeOneCharacterBtn.addEventListener("click", function (e) {
    screen.value = screen.value.length
      ? screen.value.substring(0, screen.value.length - 1)
      : "";
  });

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
      screen.value = "Enter value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
})();
let icon01 = document.getElementById("icon01");
icon01.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon01.src = "img-icon/sun.png";
  } else {
    icon01.src = "img-icon/moon.png";
  }
};
