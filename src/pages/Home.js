import React, { Fragment } from 'react';
import Navigation from '../component/Navigation.js';
import Mycarousal from '../component/Mycarousal'
import Background from '../component/Background'
import Projects from '../component/Projects.js';





function Home() {
    return (
        <Fragment>
            <Navigation/>
            <Background/>
            
            
            <div className="container-fluid">
                <div className="row">
                <Mycarousal/>
                <Projects/>

                </div>

            </div>
            
        </Fragment>
    );
}

export default Home;