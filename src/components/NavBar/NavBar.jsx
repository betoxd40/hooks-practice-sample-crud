import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.sass';

const NavBar = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

NavBar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default NavBar;