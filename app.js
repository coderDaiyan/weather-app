document.getElementById("btn").addEventListener("click", function () {
    const cityInput = document.getElementById("city-input");
    weatherOfCity(cityInput.value);
  });

  function weatherOfCity(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bac24557b1b697eccaee12aea91b3203&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "icon"
        ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("city").innerText = data.name;
        document.getElementById("weather").innerText = data.main.temp;
        document.getElementById("condition").innerText =
          data.weather[0].main;
      });
  }