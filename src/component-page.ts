// script tester
const componentTestText = document.querySelector<HTMLDivElement>("[kuasi-element=test]");

window.onload = function() {
  console.log("Your script is working!");
  if (componentTestText) {
      componentTestText.textContent = "Hello component page!";
  }
};

// get the copy button
const copyButton = document.querySelector<HTMLElement>("[kuasi-data=copy-button]");

// listen for click on copy button
if (copyButton) {
  copyButton.addEventListener("click", (event) => {
    const buttonText = copyButton.querySelector<HTMLElement>('[kuasi-data="text"]');

    // change button text to inform user operation in progress
    if (buttonText) {
      buttonText.textContent = "Copying...";
    }

    // define function to copy
    const copyJson = (event: ClipboardEvent) => {
      event.preventDefault();
      const componentJson = copyButton.querySelector<HTMLElement>('[kuasi-data="json"]')?.textContent;
      if (componentJson) {
        event.clipboardData!.setData("application/json", componentJson);
      }
    };

    // listen for copy
    document.addEventListener("copy", copyJson);
    // execute a copy command
    document.execCommand("copy");
    // remove copy listener (to allow normal copy/paste again)
    document.removeEventListener("copy", copyJson);

    // after 1 second, set button text back
    setTimeout(() => {
      if (buttonText) {
        buttonText.textContent = "Copy to Webflow";
      }
    }, 1000);
  });
}
