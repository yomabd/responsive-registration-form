console.log("hello, i am working");
inputs = document.getElementsByTagName("input");
images = document.getElementsByTagName("img");
submit = document.querySelector(".neutral");
spans = document.querySelectorAll(".text-below");

// function definition
function validation() {
  for (let i = 0; i < 4; i++) {
    if (i === 2) {
      for (l of inputs[i].value) {
        if (l === "/") {
          inputs[i].style.outline = "1.5px solid hsl(0, 100%, 74%)";
          inputs[i].style.color = "hsl(0, 100%, 74%)";
          images[i].style.setProperty("display", "block");
          spans[i].textContent = "looks like this is not an email";
          continue;
        }
      }
    }
    if (inputs[i].value === "") {
      inputs[i].style.outline = "1.5px solid hsl(0, 100%, 74%)";
      images[i].style.setProperty("display", "block");
      spans[i].textContent =
        inputs[i].getAttribute("placeholder") + " cannot be empty";
    }
  }
}

submit.addEventListener("mouseover", validation);
submit.addEventListener("mouseout", function () {
  i = 0;
  for (input of inputs) {
    input.style.outline = "1.5px solid black";
    input.style.color = "black";
    spans[i].textContent = "";
    images[i].style.setProperty("display", "none");

    i++;
  }
});
