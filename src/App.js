import React from 'react';
// import axios from 'axios';

const App = () => {

  const API_key = 'b8988efec93cd285602a1f2dda449964';
  const [loading, setLoading] = React.useState(true);
  const url = (location) => (`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`)



  React.useEffect(() => {
    const getWetherByLocation = async (location) => {
      setLoading(true);
      const resp = await fetch(url(location));
      const respData = await resp.json();

      console.log(respData);
    }

      getWetherByLocation('dnipro');
      setLoading(false);
  }, []);

  console.log(loading);
  return (
    <div className="App">
      kuku
    </div>
  );
}

export default App;
