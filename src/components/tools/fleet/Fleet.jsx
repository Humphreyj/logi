import React, { useState, useEffect, useContext } from "react";
import LogiContext from "../../../Context/LogiContext";

//components
import ShipSelectionModal from "./ShipSelectionModal";
import YourShips from "./YourShips";

const Fleet = () => {
  const [showShipModal, setShowModal] = useState(false);
  const [currentFleet, setCurrentFleet] = useState([]);
  const [fleetStats, setFleetStats] = useState({
    totalCargo: 0,
    maxSCM: 500,
    maxSpeed: 2000,
  });

  const getFleetStats = () => {};
  const toggleShipModal = () => {
    setShowModal(!showShipModal);
  };
  const addToFleet = (ship) => {
    setCurrentFleet([...currentFleet, ship]);
    let cargo = ship[1].Cargo;
    let scm = ship[1].FlightCharacteristics.ScmSpeed;
    let maxSpeed = ship[1].FlightCharacteristics.MaxSpeed;
    setFleetStats({ ...fleetStats, totalCargo: fleetStats.totalCargo + cargo });
    if (scm < fleetStats.maxSCM) {
      setFleetStats({ ...fleetStats, maxSCM: scm });
    }
    if (maxSpeed < fleetStats.maxSpeed) {
      setFleetStats({ ...fleetStats, maxSpeed: maxSpeed });
    }
  };
  const clearCurrentFleet = () => {
    setCurrentFleet([]);
  };
  return (
    <div className="fleet-manager">
      <h1 className="title">Fleet Planner</h1>
      <p className="subtext">
        Plan a fleet for a mission, will show max cargo, max fleet SCM and top
        speeds.
      </p>
      <YourShips
        fleetStats={fleetStats}
        clearCurrentFleet={clearCurrentFleet}
        currentFleet={currentFleet}
      />

      <button onClick={toggleShipModal} className="ship-select-button">
        Select Ships
      </button>

      {showShipModal ? <ShipSelectionModal addToFleet={addToFleet} /> : null}
    </div>
  );
};

export default Fleet;
