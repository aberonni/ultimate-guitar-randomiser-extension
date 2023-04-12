function openRandomTab() {
  const tabs = document.querySelectorAll(
    'a[href*="https://tabs.ultimate-guitar.com/tab/"]'
  );
  const tab = tabs[Math.floor(Math.random() * tabs.length)];
  window.open(tab.getAttribute("href"));
}

let rBeingPressed = false;

function onKeyDown(event) {
  if (event.key === "r") {
    rBeingPressed = true;
  }

  if (rBeingPressed && event.ctrlKey && event.metaKey) {
    openRandomTab();
    rBeingPressed = false;
  }
}

function onKeyUp(event) {
  if (event.key === "r") {
    rBeingPressed = false;
  }
}

function openRandomTabOnMiddleClick(event) {
  if (event.which == 2) {
    event.preventDefault();
    openRandomTab()
  }
}

function ignoreBrowserMiddleMouseDownEvent(event) {
  if (event.which == 2) {
    event.preventDefault();
  }
}

(() => {
  const button = document.createElement("button");
  button.setAttribute("id", "random-tab-button");
  button.setAttribute("tabindex", "1");
  button.appendChild(document.createTextNode("RANDOM TAB"));
  button.addEventListener("click", openRandomTab);
  button.addEventListener("auxclick", openRandomTabOnMiddleClick);
  button.addEventListener("mousedown", ignoreBrowserMiddleMouseDownEvent);
  document.body.appendChild(button);

  window.addEventListener("keydown", onKeyDown, false);
  window.addEventListener("keyup", onKeyUp, false);
})();
