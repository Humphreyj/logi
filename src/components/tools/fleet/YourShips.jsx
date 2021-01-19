import React, {useState} from "react";
//components
import Ship from "./Ship";

const YourShips = ({ currentFleet, clearCurrentFleet, fleetStats }) => {
    
  return (
    <div className="current-fleet">
      <h3>Your fleet</h3>
      {currentFleet.length ? <div className="fleet-stats">
        <div className="cargo-and-speed">
            <p className="fleet-cargo">Fleet Cargo: {fleetStats.totalCargo}</p>
            <p className="fleet-max-scm">Max SCM: {fleetStats.maxSCM}</p>
            <p className="fleet-max-speed">Max Speed: {fleetStats.maxSpeed}</p>
            <div className="fleet-ships">
                {currentFleet.map(ship => {
                    return (
                        <Ship ship={ship} key={ship[1].Name} />
                    )
                })}
            </div>
            
        </div>
            <button onClick={clearCurrentFleet}>Clear Selection</button>
            </div>
         : null}
    
    </div>
  );
};

export default YourShips;
