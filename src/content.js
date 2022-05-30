function openRandomTab() {
  const tabs = document.querySelectorAll(
    'a[href*="https://tabs.ultimate-guitar.com/tab/"]'
  );
  const tab = tabs[Math.floor(Math.random() * tabs.length)];
  window.open(tab.getAttribute("href"));
}

(() => {
  const button = document.createElement("button");
  button.setAttribute("id", "random-tab-button");
  button.setAttribute("tabindex", "1");
  button.appendChild(document.createTextNode("RANDOM TAB"));
  button.addEventListener("click", openRandomTab);
  document.body.appendChild(button);
})();
