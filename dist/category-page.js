"use strict";
const categoryTestText = document.querySelector("[kuasi-element=test]");
window.onload = function () {
    console.log("Your script is working!");
    if (categoryTestText) {
        categoryTestText.textContent = "Hello category page!";
    }
};
