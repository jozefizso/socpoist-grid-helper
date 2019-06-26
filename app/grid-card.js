let btnSave = document.getElementById('save-grid-card');
let serialNo = document.getElementById('grid-serialNo');
let ssn = document.getElementById('grid-ssn');  

btnSave.onclick = function(element) {
  
  let gridId = 'grid0';

  let grids = {};
  grids[gridId] = {
    'ssn': ssn.value,
    'serialNo': serialNo.value
  }

  chrome.storage.sync.set(grids, function() {});
};


chrome.storage.sync.get('grid0', function(data) {
  console.log('grid0 data:');
  console.log(data);

  serialNo.value = data.grid0.serialNo;
  ssn.value = data.grid0.ssn;
});
