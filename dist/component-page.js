"use strict";
const componentTestText = document.querySelector("[kuasi-element=test]");
window.onload = function () {
    console.log("Your script is working!");
    if (componentTestText) {
        componentTestText.textContent = "Hello component page!";
    }
};
const copyButton = document.querySelector("[kuasi-data=copy-button]");
if (copyButton) {
    copyButton.addEventListener("click", (event) => {
        const buttonText = copyButton.querySelector('[kuasi-data="text"]');
        if (buttonText) {
            buttonText.textContent = "Copying...";
        }
        const copyJson = (event) => {
            var _a;
            event.preventDefault();
            const componentJson = (_a = copyButton.querySelector('[kuasi-data="json"]')) === null || _a === void 0 ? void 0 : _a.textContent;
            if (componentJson) {
                event.clipboardData.setData("application/json", componentJson);
            }
        };
        document.addEventListener("copy", copyJson);
        document.execCommand("copy");
        document.removeEventListener("copy", copyJson);
        setTimeout(() => {
            if (buttonText) {
                buttonText.textContent = "Copy to Webflow";
            }
        }, 1000);
    });
}
