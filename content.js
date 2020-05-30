//alert('hi there')
chrome.runtime.onMessage.addListener(function (request){
  alert(typeof chrome.processes);
})
