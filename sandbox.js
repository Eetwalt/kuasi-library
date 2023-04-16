const calendarCanvas = document.getElementById("calendar-canvas");
const calendarButton = new rive.Rive({
  src:
    "https://uploads-ssl.webflow.com/643bea714b119b1c10dce229/643beff8777c73226f2a3e76_calendar-test.riv.txt",
  canvas: document.getElementById("calendar-canvas"),
  autoplay: true,
  artboard: "Calendar",
  stateMachines: ["calendar-sm"],
  onLoad: () => {
    calendarButton.resizeDrawingSurfaceToCanvas();
  },
  onStateChange: (riveEvent) => {
    const newStates = riveEvent.data;
    newStates.forEach((state) => {
      //name of the state transitioned to on click and the URL you want
      if (state.indexOf("Linkout") > -1) {
        window.location.href = "https://eeturantanen.webflow.io/sandbox";
        //Add an else if for all states that should have the 'pointer' cursor
      } else if (state.indexOf("on-hover") > -1) {
        calendarCanvas.style.cursor = "pointer";
      } else if (state.indexOf("Idle") > -1) {
        calendarCanvas.style.cursor = "default";
      }
    });
  }
});