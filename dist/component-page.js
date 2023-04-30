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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50LXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBaUIsc0JBQXNCLENBQUMsQ0FBQztBQUV6RixNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksaUJBQWlCLEVBQUU7UUFDbkIsaUJBQWlCLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0tBQzNEO0FBQ0gsQ0FBQyxDQUFDO0FBR0YsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYywwQkFBMEIsQ0FBQyxDQUFDO0FBR25GLElBQUksVUFBVSxFQUFFO0lBQ2QsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzdDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQWMscUJBQXFCLENBQUMsQ0FBQztRQUdoRixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1NBQ3ZDO1FBR0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUU7O1lBQ3pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixNQUFNLGFBQWEsR0FBRyxNQUFBLFVBQVUsQ0FBQyxhQUFhLENBQWMscUJBQXFCLENBQUMsMENBQUUsV0FBVyxDQUFDO1lBQ2hHLElBQUksYUFBYSxFQUFFO2dCQUNqQixLQUFLLENBQUMsYUFBYyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQztRQUdGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRy9DLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7Q0FDSiJ9