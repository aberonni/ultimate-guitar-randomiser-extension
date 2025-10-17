// Cross-browser compatibility: use browser API if available, fallback to chrome API
const browserAPI = (typeof browser !== 'undefined') ? browser : chrome;

const myTabsUrl = "https://www.ultimate-guitar.com/user/mytabs";

async function createMyTabsTabIfNotExists() {
  const [myTabsTab] = await browserAPI.tabs.query({ url: myTabsUrl });

  if (!myTabsTab) {
    await browserAPI.tabs.create({ url: myTabsUrl });
  }
}

async function openRandomTab() {
  const [myTabsTab] = await browserAPI.tabs.query({ url: myTabsUrl });

  if (!myTabsTab) {
    console.error("Tab creation failed. Maybe user is not logged in.");
    return;
  }

  if (myTabsTab.status !== "complete") {
    // tab still loading
    setTimeout(openRandomTab, 50);
    return;
  }

  await browserAPI.tabs.sendMessage(myTabsTab.id, "openRandom");
}

// Support both action (Manifest V3) and browserAction (Manifest V2)
const actionAPI = browserAPI.action || browserAPI.browserAction;

if (actionAPI && actionAPI.onClicked) {
  actionAPI.onClicked.addListener(async () => {
    await createMyTabsTabIfNotExists();
    openRandomTab();
  });
}
