const myTabsUrl = "https://www.ultimate-guitar.com/user/mytabs";

async function openRandomTab() {
  let [ultimateGuitarTab] = await chrome.tabs.query({
    url: myTabsUrl,
  });

  if (!ultimateGuitarTab) {
    ultimateGuitarTab = await chrome.tabs.create({
      url: myTabsUrl,
    });
  }

  if (ultimateGuitarTab.status !== "complete") {
    // tab still loading
    setTimeout(openRandomTab, 50);
    return;
  }

  await chrome.tabs.sendMessage(ultimateGuitarTab.id, "openRandom");
}

chrome.action.onClicked.addListener(openRandomTab);
