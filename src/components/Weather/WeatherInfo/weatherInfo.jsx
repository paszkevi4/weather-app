import React, { useState } from 'react';

export const WeatherInfo = (props) => {
  const [showingMore, setShowingMore] = useState(false);

  let name, main, wind, sys, rain, snow, weather, visibility;
  props.weather && ({ name, main, wind, sys, rain, snow, weather, visibility } = props.weather);

  return (
    <div>
      {props.weather ? (
        <div className="currentWether">
          <h3>
            Weather in {name}, {sys.country}
          </h3>
          <div>
            {weather[0].description}, {Math.round(main.temp)}℃
          </div>
          <h6
            className="showMore"
            onClick={() => {
              setShowingMore(!showingMore);
            }}>
            show more⬎
          </h6>
          {showingMore ? (
            <div className="moreInfo">
              <p>temp</p>
              <div>
                <span>Minimum temp: </span>
                <span> {main.temp_min} ℃</span>
              </div>
              <span></span>
              <div>
                <span>Maximum temp: </span>
                <span> {main.temp_max} ℃</span>
              </div>
              <div>
                <span>Feels like: </span>
                <span> {main.feels_like} ℃</span>
              </div>
              <p>wind</p>
              <div>
                <span>Speed: </span>
                <span>{wind.speed}m/s</span>
              </div>
              <div>
                <span>Direction: </span>
                <span>{wind.deg} degree</span>
              </div>
              <p>other</p>
              <div>
                <span>pressure: </span>
                <span>{main.pressure} hPa</span>
              </div>
              <div>
                <span>Visibility: </span>
                <span>{visibility}m</span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
