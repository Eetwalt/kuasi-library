const typeNavigationButtons = document.querySelectorAll<HTMLAnchorElement>("[kuasi-element=type-navigation-btn]");
const navTabButtons = document.querySelectorAll<HTMLAnchorElement>("[kuasi-element=nav-tab-link]");

typeNavigationButtons.forEach((typeNavigationButton) => {
  let pageName = typeNavigationButton.getAttribute("page-name");
  let sectionId = typeNavigationButton.getAttribute("section-id");
  let link = "https://library-kuasi.webflow.io/category/" + pageName + "#" + sectionId;
  typeNavigationButton.setAttribute('href', link);
});

const closeNavigationButtons = document.querySelectorAll<HTMLButtonElement>("[kuasi-element=close-sidenav-btn]");
const sideNavTabs = document.querySelectorAll<HTMLElement>("[kuasi-element=nav-tab]");
const sideNavTabLinks = document.querySelectorAll<HTMLAnchorElement>("[kuasi-element=nav-tab-link]");

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

sideNavTabLinks.forEach((sideNavTabLink) => {
  sideNavTabLink.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedTab = (event.target! as HTMLElement).getAttribute('data-w-tab');
 
    sideNavTabs.forEach(sideNavTab => {
      sideNavTab.classList.remove('w--tab-active'); 
    });

    const selectedTabContent = document.querySelector<HTMLElement>(`#${selectedTab}`);
    if (selectedTabContent) {
      selectedTabContent.classList.add('w--tab-active');
    }

    sideNavTabLinks.forEach((sideNavTabLink) => {
      sideNavTabLink.classList.remove("w--current");
      sideNavTabLink.setAttribute("aria-selected", "false");
      sideNavTabLink.removeAttribute("tabindex");
    });

    (event.target! as HTMLElement).classList.add("w--current");
    (event.target! as HTMLElement).setAttribute("aria-selected", "true");
    (event.target! as HTMLElement).setAttribute("tabindex", "0");
  });
});
