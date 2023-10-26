const SelectConvertFrom = document.getElementById("SelectConvertFrom");
const SelectConvertTo = document.getElementById("SelectConvertTo");
const ImageFrom = document.getElementById("ImageFrom");
const NameFrom = document.getElementById("NameFrom");
const ConvertedValueFrom = document.getElementById("ConvertedValueFrom");
const ImageTo = document.getElementById("ImageTo");
const NameTo = document.getElementById("NameTo");
const ConvertedValueTo = document.getElementById("ConvertedValueTo");

//SELECT DE//

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "real") {
    NameFrom.innerHTML = "R$ Real Brasileiro";
    ImageFrom.src = "./assets/real.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "dolar") {
    NameFrom.innerHTML = "USD Dolar Americano";
    ImageFrom.src = "./assets/dolar.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "bitcoin") {
    NameFrom.innerHTML = "₿ Bitcoin";
    ImageFrom.src = "./assets/bitcoin.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "canadense") {
    NameFrom.innerHTML = "C$ Dolar Canadense";
    ImageFrom.src = "./assets/dolarcanadense.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "euro") {
    NameFrom.innerHTML = "€ Euro";
    ImageFrom.src = "./assets/euro.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "libra") {
    NameFrom.innerHTML = "£ Libra";
    ImageFrom.src = "./assets/libra.png";
  }
});

SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "franco") {
    NameFrom.innerHTML = "CHF Franco Suiço";
    ImageFrom.src = "./assets/franco.png";
  }
});

//SELECT PARA//

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "real") {
    NameTo.innerHTML = "R$ Real Brasileiro";
    ImageTo.src = "./assets/real.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "dolar") {
    NameTo.innerHTML = "USD Dolar Americano";
    ImageTo.src = "./assets/dolar.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "bitcoin") {
    NameTo.innerHTML = "₿ Bitcoin";
    ImageTo.src = "./assets/bitcoin.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "canadense") {
    NameTo.innerHTML = "C$ Dolar Canadense";
    ImageTo.src = "./assets/dolarcanadense.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "euro") {
    NameTo.innerHTML = "€ Euro";
    ImageTo.src = "./assets/euro.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "libra") {
    NameTo.innerHTML = "£ Libra";
    ImageTo.src = "./assets/libra.png";
  }
});

SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "franco") {
    NameTo.innerHTML = "CHF Franco Suiço";
    ImageTo.src = "./assets/franco.png";
  }
});

function ConvertedValues() {
  const realtoday = 1.0;
  const dolartoday = 5.01;
  const bitcointoday = 160189.59;
  const canadensetoday = 3.66;
  const eurotoday = 5.35;
  const libratoday = 6.14;
  const francotoday = 5.63;
  const InputValue = document.getElementById("InputValue").value;

  //REAL PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "real") {
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (SelectConvertFrom.value == "selectfrom" && SelectConvertTo.value == "selectto") {
    Swal.fire({
      title: "Caro usuário",
      text: 'Selecione as moedas para realizar a conversão',
      color: "#696969",
      width: '350px',
      height: "10px",
      padding: '30px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "dolar") {
    ConvertedValueFrom.innerHTML = "R$ " + InputValue;
    let conversao = InputValue / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "bitcoin") {
    ConvertedValueFrom.innerHTML = "R$ " + InputValue;
    let conversao = InputValue / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "real" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "R$ " + InputValue;
    let conversao = InputValue / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML =  "R$ " + InputValue;
    let conversao = InputValue / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "libra") {
    ConvertedValueFrom.innerHTML = "R$ " + InputValue;
    let conversao = InputValue / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "franco") {
    ConvertedValueFrom.innerHTML ="R$ " + InputValue;
    let conversao = InputValue / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //DOLAR PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "real") {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "dolar") {
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (
    SelectConvertFrom.value == "dolar" &&
    SelectConvertTo.value == "bitcoin"
  ) {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "dolar" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "libra") {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "franco") {
    ConvertedValueFrom.innerHTML = "US$ " + InputValue;
    let conversao = (InputValue * dolartoday) / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //BITCOIN PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "real") {
    ConvertedValueFrom.innerHTML = "₿" + InputValue;
    let conversao = (InputValue * bitcointoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "bitcoin" &&
    SelectConvertTo.value == "dolar"
  ) {
    ConvertedValueFrom.innerHTML = "₿" + InputValue;
    let conversao = (InputValue * bitcointoday) / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "bitcoin" &&
    SelectConvertTo.value == "bitcoin"
  ) {
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (
    SelectConvertFrom.value == "bitcoin" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "₿" + InputValue;
    let conversao = (InputValue * bitcointoday) / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML = InputValue;
    let conversao = (InputValue * bitcointoday) / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "bitcoin" &&
    SelectConvertTo.value == "libra"
  ) {
    ConvertedValueFrom.innerHTML = "₿" + InputValue;
    let conversao = (InputValue * bitcointoday) / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "bitcoin" &&
    SelectConvertTo.value == "franco"
  ) {
    ConvertedValueFrom.innerHTML = "₿" + InputValue;
    let conversao = (InputValue * bitcointoday) / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //DOLAR CANADENSE PARA DEMAIS MOEDAS //

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "real"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "dolar"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "bitcoin"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "canadense"
  ) {
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "euro"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "libra"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "canadense" &&
    SelectConvertTo.value == "franco"
  ) {
    ConvertedValueFrom.innerHTML = "C$" + InputValue;
    let conversao = (InputValue * canadensetoday) / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //EURO PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "real") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "dolar") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "bitcoin") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "euro" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "libra") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "franco") {
    ConvertedValueFrom.innerHTML = "€" + InputValue;
    let conversao = (InputValue * eurotoday) / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //LIBRA PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "real") {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "dolar") {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "libra" &&
    SelectConvertTo.value == "bitcoin"
  ) {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "libra" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "libra") {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "franco") {
    ConvertedValueFrom.innerHTML = "£" + InputValue;
    let conversao = (InputValue * libratoday) / francotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(conversao);
  }

  //FRANCO SUIÇO PARA DEMAIS MOEDAS//

  if (SelectConvertFrom.value == "franco" && SelectConvertTo.value == "real") {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / realtoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "franco" && SelectConvertTo.value == "dolar") {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / dolartoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "franco" &&
    SelectConvertTo.value == "bitcoin"
  ) {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / bitcointoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "franco" &&
    SelectConvertTo.value == "canadense"
  ) {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / canadensetoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "franco" && SelectConvertTo.value == "euro") {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / eurotoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "franco" && SelectConvertTo.value == "libra") {
    ConvertedValueFrom.innerHTML = "Fr" + InputValue;
    let conversao = (InputValue * francotoday) / libratoday;

    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(conversao);
  }

  if (
    SelectConvertFrom.value == "franco" &&
    SelectConvertTo.value == "franco"
  ) {
    Swal.fire({
      title: "Caro usuário",
      text: 'Não é possível realizar a conversão para a mesma moeda',
      color: "#696969",
      width: '330px',
      height: "100px",
      padding: '3px',
      confirmButtonText: "Entendi",
      timer: 7000,
      timerProgressBar: true,
      confirmButtonColor: "#ee9b01",
      background: '#ffffff',
      footer: 'Conversor de Moedas 2023 | Filipe',
      imageUrl: "./assets/atencao.png", 
      imageWidth: 200, 
      imageHeight: 180,
    
    });
  }
}
