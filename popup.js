function createStories(info) {
  $.ajax({
    url: "http://localhost:3000/sub_stories",
    method: 'POST',
    data: {
      parent: info.parent,
      stories: info.stories,
      project_id: info.projectId
    },
    success: function(response) {
      console.log(response);
    },
    error: function(response) {
      console.log(response);
    }
  });
}

window.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        createStories);
  });
});
