import React from 'react';

export const Form = (props) => (
  <div className="form">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Input your city" />
      <button>Get</button>
    </form>
  </div>
);
