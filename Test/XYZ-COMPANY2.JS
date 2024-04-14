let api = `https://v6.exchangerate-api.com/v6/fee21a60b2739adba94cb6a9/latest/USD`;
const fromDropDown = document.getElementById('from-currency');
const toDropDown = document.getElementById('to-currency');


currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "RWF";

let convertCurrency = () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertAmount = (amount / fromExchangeRate) * toExchangeRate;
        document.getElementById('result').innerHTML=convertAmount;
            });
  }
  else {
    alert("please fill in the amount");
  }

};
document.querySelector("#btn").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
