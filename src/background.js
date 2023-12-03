const myTabsUrl = "https://www.ultimate-guitar.com/user/mytabs";

async function createMyTabsTabIfNotExists() {
  const [myTabsTab] = await chrome.tabs.query({ url: myTabsUrl });

  if (!myTabsTab) {
    await chrome.tabs.create({ url: myTabsUrl });
  }
}

async function openRandomTab() {
  const [myTabsTab] = await chrome.tabs.query({ url: myTabsUrl });

  if (!myTabsTab) {
    console.error("Tab creation failed. Maybe user is not logged in.");
    return;
  }

  if (myTabsTab.status !== "complete") {
    // tab still loading
    setTimeout(openRandomTab, 50);
    return;
  }

  await chrome.tabs.sendMessage(myTabsTab.id, "openRandom");
}

chrome.action.onClicked.addListener(async () => {
  await createMyTabsTabIfNotExists();
  openRandomTab();
});
