import React from 'react';

const Ship = ({ship,addToFleet}) => {
    return (
        <div onClick={() => {addToFleet(ship)}} className="ship">
            <div className="ship-name-and-role">
              <p className="ship-name">{ship[1].Name}</p>
              <p className="ship-role">{ship[1].Career}</p>
            </div>

            <div className="ship-stats">
              <p className="ship-cargo">Cargo: {ship[1].Cargo}</p>
              <p className="ship-crew">Crew: {ship[1].Crew}</p>
              <p className="ship-scm-speed">
                SCM speed: {ship[1].FlightCharacteristics.ScmSpeed}
              </p>
              <p className="ship-max-speed">
                Max speed: {ship[1].FlightCharacteristics.MaxSpeed}
              </p>
            </div>
          </div>
    );
}

export default Ship;
