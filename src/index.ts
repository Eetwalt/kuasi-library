const homeTestText = document.querySelector<HTMLDivElement>("[kuasi-element=test]");

window.onload = function() {
  console.log("Your script is working!");
  if (homeTestText) {
    homeTestText.textContent = "Hello home page!!";
  }
};