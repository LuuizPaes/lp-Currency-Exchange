const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


async function convertValues() {
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//real value
    const currencyValue = document.querySelector(".currency-value")//others values

    const currencySelect = document.querySelector(".currency-select")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    console.log(data)

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high
    

    if(currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        
        }).format(inputCurrencyValue / libraToday)
    }

    

    if(currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        
        

        if(currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImage.src = "./assets/dolar.png"
        }

        if(currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
        }

        if(currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra.png"
        }

        if(currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin.png"
        }

    

        convertValues()
    }

      
    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)
