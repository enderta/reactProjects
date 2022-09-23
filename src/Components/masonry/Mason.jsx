import React from 'react';
import './mason.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Mason = () => {
    const [movies,setMovie ] = React.useState([]);
    React.useEffect(() => {
            fetch(`https://www.omdbapi.com/?apikey=9f4b46a&s=batman&p=100`).then((res) => res.json()).then((data) => {
                setMovie(data.Search);

            });


        }
    , [])

    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 5}}
            >
                <Masonry>
                    {movies.map((image, i) => (
                        <img
                            key={i}
                            src={image.Poster}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Mason;