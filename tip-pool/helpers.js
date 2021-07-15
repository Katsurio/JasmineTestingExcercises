
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;
  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects a table row element, appends a newly created delete btn
function appendServerDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.addEventListener('click', (evt) => {
    let targetParent = evt.target.parentElement;

    targetParent.remove(); // remove parent tr
    delete allServers[targetParent.id]; // delete server from allServers obj. with parent's ID
  })

  tr.append(newTd);
}

function appendPaymentDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.addEventListener('click', (evt) => {
    let targetParent = evt.target.parentElement;

    targetParent.remove(); // remove parent tr
    delete allPayments[targetParent.id]; // delete server from allPayments obj. with parent's ID
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  })

  tr.append(newTd);
}

