const numbers = document.querySelectorAll(".numbers");
const buttonSubmit = document.getElementById("button-submit");
const containerSubmit = document.querySelector(".container-submit");
const containerThankYou = document.querySelector(".container-thank-you");
const ratingValue = document.getElementById("rating-value");

function score() {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (event) {
      numbers.forEach(function (button) {
        button.classList.remove("numbersClicked");
      });
      event.target.classList.add("numbersClicked");
      ratingValue.innerHTML = event.target.innerHTML;
    });
  }
}

score();

buttonSubmit.addEventListener("click", function () {
  containerSubmit.classList.add("hidden");
  containerThankYou.classList.remove("hidden");
});
