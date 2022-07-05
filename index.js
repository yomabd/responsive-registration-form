console.log("hello, i am working");
inputs = document.getElementsByTagName("input");
form = document.querySelector("form");
submit = document.querySelector(".neutral");
spans = document.querySelectorAll(".js");
submit.addEventListener("mouseover", function () {
  var i = 0;
  for (input of inputs) {
    if (input.value === "") {
      input.style.outline = "1.5px solid hsl(0, 100%, 74%)";
      input.style.color = "hsl(0, 100%, 74%)";

      spans[i].style.setProperty("--aftercontent", "content after");
      i++;
    }
    val = input.value;
    if (input.getAttribute("type") === "email") {
      for (i of val) {
        if (i === "/") {
          spans[2].style.setProperty("--aftercontent", "email looks incorrect");
        }
      }
    }
  }
});
submit.addEventListener("mouseout", function () {
  for (input of inputs) {
    input.style.outline = "1.5px solid black";
    input.style.color = "black";
  }
});
