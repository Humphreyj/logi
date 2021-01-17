import React from 'react';

//components
import DesktopNavigation from './DesktopNavigation';

const Header = () => {
    return (
        <div className='header'>
            <h1>Logi</h1>
            <DesktopNavigation />
        </div>
    );
}

export default Header;
