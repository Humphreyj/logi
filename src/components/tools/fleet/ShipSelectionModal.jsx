import React,{useContext} from 'react';
import LogiContext from '../../../Context/LogiContext';

//components
import Ship from './Ship';
const ShipSelectionModal = ({addToFleet}) => {
    const {allShips} = useContext(LogiContext);
    return (
        <div className='ship-selection-modal'>
            {Object.entries(allShips).map((ship) => {
        
        return (
          <Ship key={ship[1].Name} addToFleet={addToFleet} ship={ship}/>
        );
      })}
        </div>
    );
}

export default ShipSelectionModal;
