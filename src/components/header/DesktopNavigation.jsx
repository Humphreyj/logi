import React from 'react';
import {Link} from 'react-router-dom';

const DesktopNavigation = () => {
    return (
        <nav className="desktop-nav">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/payout-calc' className="nav-link">Calculator</Link>
            <Link to='/meal-planner' className="nav-link">Food</Link>
            
            <Link to='/fps-loadouts' className="nav-link">Loadouts</Link>
        </nav>
    );
}

export default DesktopNavigation;
