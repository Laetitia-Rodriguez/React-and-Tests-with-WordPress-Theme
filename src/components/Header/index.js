import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({menu}) => (
    <header className="header">
        <div className="header__title">
            <p>Lp apptune</p>
        </div>
        <nav className="header__nav">
            {menu.map((link) => (
                <a className="header__nav__a" href="#" key={link.title}>{link.title}</a>
            ))}
        </nav>
    </header>
);

Header.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Header; 