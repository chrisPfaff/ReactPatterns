import React from "react";
import "../styles/app.scss";
import SeasonDisplay from "./SeasonDisplay";

function App() {
  const [location, setLocation] = React.useState("");
  const [month, setMonth] = React.useState(false);

  React.useEffect(() => {
    let date = new Date();

    setMonth(date.getMonth());

    navigator.geolocation.getCurrentPosition(success => {
      if (success.coords.latitude > 0) {
        setLocation("Northern Hemisphere");
      } else {
        setLocation("Southern Hemisphere");
      }
    });
  });

  return (
    <div className="App">
      <SeasonDisplay location={location} month={month} />
    </div>
  );
}

export default App;
