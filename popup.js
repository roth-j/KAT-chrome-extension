document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('img').addEventListener('click', onclick, false);

  function onclick (){
    chrome.tabs.query({currentWindow:true, active: true},
      function (tabs){
        //const procs = chrome.processes | chrome.experimental.processes;
        chrome.tabs.discard(tabs[0].id)
      }
    )
  }

  function killTab(processId) {
    alert('kill', processId)
    chrome.processes.terminate(processId)
  }

}, false)
