"use strict";
const typeNavigationButtons = document.querySelectorAll("[kuasi-element=type-navigation-btn]");
const navTabButtons = document.querySelectorAll("[kuasi-element=nav-tab-link]");
typeNavigationButtons.forEach((typeNavigationButton) => {
    let pageName = typeNavigationButton.getAttribute("page-name");
    let sectionId = typeNavigationButton.getAttribute("section-id");
    let link = "https://library-kuasi.webflow.io/category/" + pageName + "#" + sectionId;
    typeNavigationButton.setAttribute('href', link);
});
const closeNavigationButtons = document.querySelectorAll("[kuasi-element=close-sidenav-btn]");
const sideNavTabs = document.querySelectorAll("[kuasi-element=nav-tab]");
const sideNavTabLinks = document.querySelectorAll("[kuasi-element=nav-tab-link]");
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
        const selectedTab = event.target.getAttribute('data-w-tab');
        sideNavTabs.forEach(sideNavTab => {
            sideNavTab.classList.remove('w--tab-active');
        });
        const selectedTabContent = document.querySelector(`#${selectedTab}`);
        if (selectedTabContent) {
            selectedTabContent.classList.add('w--tab-active');
        }
        sideNavTabLinks.forEach((sideNavTabLink) => {
            sideNavTabLink.classList.remove("w--current");
            sideNavTabLink.setAttribute("aria-selected", "false");
            sideNavTabLink.removeAttribute("tabindex");
        });
        event.target.classList.add("w--current");
        event.target.setAttribute("aria-selected", "true");
        event.target.setAttribute("tabindex", "0");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBb0IscUNBQXFDLENBQUMsQ0FBQztBQUNsSCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQW9CLDhCQUE4QixDQUFDLENBQUM7QUFFbkcscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtJQUNyRCxJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsSUFBSSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLElBQUksSUFBSSxHQUFHLDRDQUE0QyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3JGLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBb0IsbUNBQW1DLENBQUMsQ0FBQztBQUNqSCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWMseUJBQXlCLENBQUMsQ0FBQztBQUN0RixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQW9CLDhCQUE4QixDQUFDLENBQUM7QUFFckcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMscUJBQXFCLEVBQUUsRUFBRTtJQUN2RCxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN4RCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7SUFDekMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2pELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNLFdBQVcsR0FBSSxLQUFLLENBQUMsTUFBdUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbEYsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELGNBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFRixLQUFLLENBQUMsTUFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxNQUF1QixDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsS0FBSyxDQUFDLE1BQXVCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=