const amountElement = document.getElementById('amount');
const firstSelect = document.getElementById('first');
const secondSelect = document.getElementById('second');
const curr = new Currency("AZN","TRY");
const ui = new UI(firstSelect,secondSelect);
eventListener()

function eventListener(){
  amountElement.addEventListener("input",exchangeCurrency);
  firstSelect.onchange = function(){
    curr.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
    ui.changeFirstText()
    exchangeCurrency()
  }
  secondSelect.onchange = function(){
    curr.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
    ui.changeSecondText()
    exchangeCurrency()
  }
}
function exchangeCurrency(){
  curr.changeAmount(amountElement.value)
  curr.exchange()
    .then(result => {
      amountElement.value=="" ? ui.changeResult(null): ui.changeResult(result.toFixed(2))    
    })
    .catch(err => console.error(err))
}

