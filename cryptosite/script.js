const apiurl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd'

// async function coincheck() {
//     const response = await fetch(apiurl)
//     let data = await response.json()
//     console.log(data);
//     document.querySelector('#bit').innerHTML = '$'+data.bitcoin.usd
//     document.querySelector('#eth').innerHTML= '$'+data.ethereum.usd
//     document.querySelector('#Dog').innerHTML= '$'+data.dogecoin.usd
// }
// coincheck()

fetch(apiurl)
.then(function(data){
    return data.json()
})
.then(function(ndata) {
    console.log(ndata.bitcoin.usd)
    document.querySelector('#bit').innerHTML = '$'+ndata.bitcoin.usd
    document.querySelector('#eth').innerHTML= '$'+ndata.ethereum.usd
    document.querySelector('#Dog').innerHTML= '$'+ndata.dogecoin.usd
})
