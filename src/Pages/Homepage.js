import React from 'react';
import FortuneCookie from '../components/FortuneCookie';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';

function Homepage() {
    return (
        <React.Fragment>
            <NavComponent /> 
            <FortuneCookie />
            <FooterComponent />
        </React.Fragment>
    )
}

export default Homepage

