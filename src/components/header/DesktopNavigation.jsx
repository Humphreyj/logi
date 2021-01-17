import React from 'react';
import {Link} from 'react-router-dom';

const DesktopNavigation = () => {
    return (
        <nav className="desktop-nav">
            <Link to='/payout-calc' className="nav-link">Calculator</Link>
            <Link to='/citizen-lookup' className="nav-link">Citizens</Link>
            <Link to='/meal-planner' className="nav-link">Food</Link>
            <Link to='/fps-loadouts' className="nav-link">Loadouts</Link>
        </nav>
    );
}

export default DesktopNavigation;
