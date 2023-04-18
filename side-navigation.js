const typeNavigationButtons = document.querySelectorAll("[kuasi-element=type-navigation-btn]");
const navTabButtons = document.querySelectorAll("[kuasi-element=nav-tab-link]");

typeNavigationButtons.forEach((typeNavigationButton) => {
    let pageName = typeNavigationButton.getAttribute("page-name");
    let sectionId = typeNavigationButton.getAttribute("section-id");
    let link = pageName + "#" + sectionId;
    typeNavigationButton.setAttribute('href', link);
});