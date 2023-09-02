const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "580fa4d9b34b4c844149c95c0bf17edc";
  const city = document.querySelector(".search-box input").value;
  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "25rem";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }
      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "https://images2.imgbox.com/4d/00/rwBxfe9H_o.png";
          break;
        case "Rain":
          image.src = "https://images2.imgbox.com/e8/62/zsBVlCs1_o.png";
          break;
        case "Snow":
          image.src = "https://images2.imgbox.com/ad/cd/8ViWoVTr_o.png";
          break;
        case "Clouds":
          image.src = "https://images2.imgbox.com/8a/8e/kKAvROuh_o.png";
          break;
        case "Haze":
          image.src = "https://images2.imgbox.com/26/1e/k0THq8Ac_o.png";
          break;
        default:
          image.src = "";
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "36.8rem";
    });
});
