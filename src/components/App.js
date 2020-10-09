import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import workStationsReadings from "../devicesReadings.json";

import Overview from "./Overview.page";
import DrillDown from "./DrillDown.page";
import StationView from "./StationView.page";

const deviceReadings = workStationsReadings.reduce(
  (devices, currentReading) => {
    const {
      device_id: deviceId,
      pressure,
      temp,
      volume,
      status,
      timestamp,
    } = currentReading;

    if (deviceId in devices) {
      devices[deviceId].readings = [
        ...devices[deviceId].readings,
        { pressure, temp, volume, status, timestamp },
      ];
    } else {
      devices[deviceId] = {
        id: deviceId,
        readings: [{ pressure, temp, volume, status, timestamp }],
      };
    }

    return devices;
  },
  {}
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Overview deviceReadings={deviceReadings} />}
        />
        <Route
          path="/drilldown/:deviceId"
          exact
          component={({ match }) => (
            <DrillDown currentDevice={deviceReadings[match.params.deviceId]} />
          )}
        />
        <Route
          path="/station-view"
          component={() => (
            <StationView stationsReadings={workStationsReadings} />
          )}
        />
        <Route path="*" exact component={() => <h2>OOPS PAGE NOT FOUND</h2>} />
      </Switch>
    </Router>
  );
};

export default App;
