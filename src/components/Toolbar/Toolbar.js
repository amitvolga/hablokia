import React from 'react';

import DrawerToggleButton from '../SideDrawer/DraweToggleButton';
import './Toolbar.css'
import ButtonNavigation from '../ButtonNavigation.js'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">NEW YORK</a></div>
            <div className="spacer" />
            <div className="toolvar_navigation-items"><ButtonNavigation /></div>
        </nav>
    </header>
);

export default toolbar;