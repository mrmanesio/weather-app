import React from 'react';
// import axios from 'axios';

const App = () => {
  const API_key = 'b8988efec93cd285602a1f2dda449964';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const url = (location) =>
    `${proxy}api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;

  React.useEffect(() => {
    const getWetherByLocation = async (location) => {
      const resp = await fetch(url(location));
      const respData = await resp.json();
      setData(respData);
      setLoading(false);
    };

    getWetherByLocation('dnipro');
  }, []);

  console.log(loading);

  return (
    <div className="App">
      {data?.name}
      {Math.round(data?.main?.temp - 273)}
      feels like
      {Math.round(data?.main?.feels_like - 273)}
      kukuku
    </div>
  );
};

export default App;
