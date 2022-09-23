import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-5">
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="float-left">
          <WeatherTemperature imperial={props.data.temperature} />
        </div>
      </div>

      <div className="col-6">
        <div className="AdditionalWeatherInfo">
          <ul>
            <WeatherIcon code={props.data.icon} size={52} />

            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
