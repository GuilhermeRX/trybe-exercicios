const coincapAPI = async () => {
  try {
    const response = await fetch(`https://api.coincap.io/v2/assets`)
    const data = await response.json();
    const coins = data.data.filter((coin) => Number(coin.rank) <= 10);

    const format = coins.forEach(append)
  } catch (error) {
    console.log('Error Inesperado')
  }
}

coincapAPI()

const usdcurrence = async () => {
  const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`
  const endpointUrl = `/currencies/usd.min.json`
  const url = baseUrl.concat(endpointUrl)


  const currence = await fetch(url)
  const data = await currence.json()
  const brlPrice = data.usd.brl

  return brlPrice;
}


async function append(data) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  const usdPrice = Number(data.priceUsd)
  const usdcurrent = await usdcurrence()
  const brlPrice = usdPrice * usdcurrent

  li.innerText = `${data.name} ${data.symbol}: ${brlPrice.toFixed(2)}`;
  ul.appendChild(li);
}
