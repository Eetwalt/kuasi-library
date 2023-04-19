// Make the dynamic navigation buttons have the correct section links.
const typeNavigationButtons = document.querySelectorAll("[kuasi-element=type-navigation-btn]");
const navTabButtons = document.querySelectorAll("[kuasi-element=nav-tab-link]");

typeNavigationButtons.forEach((typeNavigationButton) => {
    let pageName = typeNavigationButton.getAttribute("page-name");
    let sectionId = typeNavigationButton.getAttribute("section-id");
    let link = "https://library-kuasi.webflow.io/category/" + pageName + "#" + sectionId;
    typeNavigationButton.setAttribute('href', link);
});

// Make the side navigation tabs to state none on close nav button click.

// Find all closeNavigationButtons, tablinks and tabs
const closeNavigationButtons = document.querySelectorAll("[kuasi-element=close-sidenav-btn]");
const sideNavTabs = document.querySelectorAll("[kuasi-element=nav-tab]");
const sideNavTabLinks = document.querySelectorAll("[kuasi-element=nav-tab-link]");

// For each closeNavigationButton, close nav on click
closeNavigationButtons.forEach((closeNavigationButton) => {
    closeNavigationButton.addEventListener("click", (event) => {
      sideNavTabs.forEach((sideNavTab) => {
        sideNavTab.classList.remove("w--tab-active");
      });
      sideNavTabLinks.forEach((sideNavTabLink) => {
        sideNavTabLink.classList.remove("w--current");
        sideNavTabLink.setAttribute("aria-selected", "false");
        sideNavTabLink.removeAttribute("tabindex");
      });
    });
});
  
// For each sideNavTabLink, open tabs again.
sideNavTabLinks.forEach((sideNavTabLink) => {
    sideNavTabLink.addEventListener("click", (event) => {
        event.preventDefault();

        // store selected tab
        const selectedTab = event.target.getAttribute('data-w-tab'); 
 
        // remove all active classes
        sideNavTabs.forEach(sideNavTab => {
            sideNavTab.classList.remove('w--tab-active'); 
        });

        // find corresponding tab
        const selectedTabContent = document.querySelector(`#${selectedTab}`);
        selectedTabContent.classList.add('w--tab-active');

        // remove "current" class from all tab links
        sideNavTabLinks.forEach((sideNavTabLink) => {
            sideNavTabLink.classList.remove("w--current");
            sideNavTabLink.setAttribute("aria-selected", "false");
            sideNavTabLink.removeAttribute("tabindex");
        });

        // add "current" class to the corresponding tab link
        event.target.classList.add("w--current");
        event.target.setAttribute("aria-selected", "true");
        event.target.setAttribute("tabindex", "0");
    });
});

  