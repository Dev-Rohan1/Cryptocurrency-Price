let bitcoin = document.querySelector(".bitcoin");
let ethereum = document.querySelector(".ethereum");
let dogecoin = document.querySelector(".dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "Get",
  headers: {},
};
$.ajax(settings).done(function (res) {
  bitcoin.innerText = "$" + res.bitcoin.usd;
  ethereum.innerText = "$" + res.dogecoin.usd;
  dogecoin.innerText = "$" + res.ethereum.usd;
});
