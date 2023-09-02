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
        container.style.height = "25.rem";
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
          image.src =
            "https://uc8f86d41e9133e24c2335524d1e.previews.dropboxusercontent.com/p/thumb/ACBvO2V6Ra8k_5S-PzrTqkt_7P_4sOVjIH9-1YUjPL3QO8kf5i0kDVBOzyYAfHQ2LKXOyeFHnlCrDBGnQcwSvDhhfyQmjVpPxTJAFcj_RofJL39UZiXxpLVOcXJzInos3eNBEe3h6t7KBnpbNaAXaz2iB0rS2J70PgLz-eSt-3jzewjSqGITpgyQW0MQE8AHt5fQFMFMebDeDH4991_x65N5IDmtMl0UEJEclg1PQS-NwWkUyEvColzqoXEcW8c7vGBnmBqmUX3OBMEzU6DLTFZR_J4J95nIqNlHOHYFzhUhWGl9t4Rqeunbu73WeOoyY2FgSZEuHvjlMnZgX_JIZ1Z-1tpZCf-VpD_MPTJpNtxM_weDtfE9daQji4ION3uoHag/p.png";
          break;
        case "Rain":
          image.src =
            "https://uc3fc1dc5dad7f573388ff006c0b.previews.dropboxusercontent.com/p/thumb/ACDZ4oCfkfAZxyOfAHy8tQlEFu85ItoSkoa7-AkB2AxFECKVsws6o96IsVt7jN7fBk9-nOBT-GeGb1wv2_A4IkH3c1FCtbFQOIUxIDb12GM4AJ3_-Xid6wfg-ULnRPHFLPb7r-v6YdC8aptulFvsNWcop3SiHMqe_K6ulUbcaL8rfT69t5-_gZt5wHFWVQ9KtNQHUC_fYYgRqY7EtKh-kzje5OXBfYY_ZycLYiJ_s1SIXHIESpYeS3VSAVKfp-Z4i5EUVrCpYq8Ow_X3SC23axhzqbXAi4QZKLTEiohkJXjWnf-5fAJL7rRx6-OgFFa_alpHfrW0OBxl11NlIbS3_AhRPdREAAe0SXylPnlj84gmyk9jjiCI-ybLlR9uzBiQeiA/p.png";
          break;
        case "Snow":
          image.src =
            "https://ucf3e2e9bc5e63b875fb98df619d.previews.dropboxusercontent.com/p/thumb/ACC0aA-_ETZ_aYSYqBo77AuffQ2iq2dcay_QMSGp0z1gtWWceB-3LtPQ5sJI1W_WL73KtZW5xydzjHoDUZVFEEE9nLbxzmDZ0i8L5AJsBrlar9QCMsaPdSX-pzRw7WDeAfT8YCjNxOD--gn_nNWcl3nNJ2Y2lvmm8ECXmhaG0f_bAOaetlDzyWFvbaP36Wa358QTg02Vwe6jzdVgIHK8X_oVJniqgRYI8nZuNmwflgBufUkUpA7Tc_HKp4npJabgB8lBHjcPdnFhNPIkfDY2rXf7eNin3rAY0A1mqv0Lgd9MEEwMdeUywtQkx2LqJSIASsdMxL3rBoXN-qNuPwP5d4pywDI-JuLx85o1dMmB3luujg3UyS3NZ8gWd7awjGFdwKU/p.png";
          break;
        case "Clouds":
          image.src =
            "https://uc1f86c398fa58ac6926085d28d3.previews.dropboxusercontent.com/p/thumb/ACAIdQG8JkRbSZArg7gMoWBa5BDR-w_kjbgd-oqtmbwQvwVssKVs4ePDu0PLevIfMTuK17KYQ-_o_SbZ7if3IdT2xPQBQv-3UOnRA6iHPyLo1WvmUPwGfV7TkeKV6mc3aG-VvLZzB0bibWPTFmrVf9uD6SxeYyv6A97M-yGnlzQzPdeBYUi-o-ylLgf3_CoPx46aUQ0mDiNeBQMmpYlC6nsDO_Twv_YUjvRyU5tx-g1akvc6EbZ8hNHqXGGrxL9tQmbNQRHxIQqXhMnKC3GTRYRhyx-fRpLMlSLALpyg-tJjfCBEb4SCxelzcf10i1GuxG6Wqoen2bNDjo469m9vn7qVLBA-kxYBVRgmOzYaUedYiZetyJmQHn9u_DlpYGELUWs/p.png";
          break;
        case "Haze":
          image.src =
            "https://uc974c4c20ec69099980f1af9bbc.previews.dropboxusercontent.com/p/thumb/ACAAGqbo_O7lh4MwEQt9LRtUqNfsKbdI4sKIIHM54zDqQ5yVNFf3SffhEvyjGu-6WpUCGCy9qK_q_mQGKPyWDRKPjGaArvtJfW4PXLtCO2TOjT9XfcRbTGyguSdybLA8HTxMr3yIE0-zE4iSqq7vbBNvdkFLk3ZQawl3zw6MVibnLfQu-gNPhMClBLqk4M2aP6aGi8Q3XCo4jED5yXlg-ubRZry-ucBd-OMJay5k9A6CnUGzxfC1ck7QMNMUkIp_OqwnI0mO2Yu-leZMalAM_-BABiHUEoEcRehncJyf7DqUdo5cp_DiJeSVaPZxTyqylsQtvy2LT-Dea_29hDSTC6mFbPESPiOWtF2Q3BWc0fY6ksii6VKgk_1nNd49lzzS05Y/p.png";
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
