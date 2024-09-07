import Hero from './Hero';
import ServicesGallery from './ServicesGallery';
import Industry from './Industry';

import * as React from 'react';

function Home(){

    return (
        <React.Fragment>
            <Hero/>
            <ServicesGallery/>
            <Industry/>
        </React.Fragment>
    );  
}

export default Home;