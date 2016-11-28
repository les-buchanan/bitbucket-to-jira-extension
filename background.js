// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]

// A function to use as callback
function open_jira(jira_task_url) {
  console.log("jira_task_url: " + jira_task_url);
  chrome.tabs.create({ url: jira_task_url });
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {message: "none"}, open_jira);
});