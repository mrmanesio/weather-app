import axios from 'axios';
import React from 'react';

const App = () => {

  const proxy = 'https://cors-anywhere.herokuapp.com/';

  React.useEffect(() => {
    axios
      .get(
        `${proxy}pro.openweathermap.org/data/2.5/forecast/hourly?q=Dnipro&appid=b8988efec93cd285602a1f2dda449964`,
      )
      .then((responce) => console.log(responce));
  }, []);

  return (
    <div className="App">
      kuku
    </div>
  );
}

export default App;
