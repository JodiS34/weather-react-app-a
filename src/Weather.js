import React from "react";
import axios from "axios";
import loader from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in {response.data.name} is ${response.data.main.temp}°C`,
    );
  }
  let apiKey = "3a94f3778290bfeee6127850dbbe51d";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
