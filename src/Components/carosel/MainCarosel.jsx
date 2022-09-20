import React from 'react';
import Navbar from "./Navbar";
import Carosel from "./Carosel";
import Carousel from "bootstrap/js/src/carousel";
import Cards from "./Cards";

const MainCarosel = () => {
    return (
        <div>
            <Navbar />
           <div>
               <main>
                   <Carosel />
                   <section>
                       <Cards />
                   </section>
               </main>
           </div>

        </div>
    );
};

export default MainCarosel;