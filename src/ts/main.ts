window.onload = function () {
  let mainGoButton: HTMLButtonElement = document.getElementById(
    "start-go-button"
  ) as HTMLButtonElement;
  mainGoButton.addEventListener("click", handleButtonClick);
};

function handleButtonClick() {
  window.location.href = "html/create.html";
}
