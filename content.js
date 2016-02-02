chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var $detail = $('.edit.details');
    var domInfo = {
      parent: $detail.find('.id.text_value').val(),
      projectId: window.location.pathname.split('/')[3],
      stories: []
    };
    $tasks = $detail.find('.tasks .tasks_index div.tracker_markup');
    $.each($tasks, function(index, val) {
      domInfo['stories'].push({ name: $(val).text() });
    });
    response(domInfo);
  }
});
