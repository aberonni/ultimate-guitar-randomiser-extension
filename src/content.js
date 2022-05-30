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

(() => {
  const button = document.createElement("button");
  button.setAttribute("id", "random-tab-button");
  button.setAttribute("tabindex", "1");
  button.appendChild(document.createTextNode("RANDOM TAB"));
  button.addEventListener("click", openRandomTab);
  document.body.appendChild(button);

  window.addEventListener("keydown", onKeyDown, false);
  window.addEventListener("keyup", onKeyUp, false);
})();
