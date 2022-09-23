import React from 'react';
import './mason.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Mason = () => {
    const [prods, setProds] = React.useState([]);
    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProds(json.products))

    }
    , [])

    return (
        <div>
            <Masonry columnsCount={3} gutter="10px">
                {
                    prods.map((image, i) => (
                        <img
                            key={i}
                            src={image.thumbnail}
                            style={{width: "100%", display: "block"}}
                        />
                    ))

                }
            </Masonry>
        </div>
    );
};

export default Mason;