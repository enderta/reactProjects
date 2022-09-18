import React from 'react';
import Navbar from "./Navbar";
import Carosel from "./Carosel";
import Carousel from "bootstrap/js/src/carousel";

const MainCarosel = () => {
    return (
        <div>
            <Navbar />
           <div>
               <main>
                   <Carosel />
               </main>
           </div>

        </div>
    );
};

export default MainCarosel;