import React from 'react';
import Navbar from "./Navbar";
import Carosel from "./Carosel";
const Cards = () => {
    const [search, setSearch] = React.useState('');
    const [movies, setMovie] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=9f4b46a&s=batman&p=100`).then((res) => res.json()).then((data) => {
    setMovie(data.Search);
            setLoading(false);
        });


        }
    , []);
    console.log(movies);
const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=9f4b46a&s=${search}&p=100`).then((res) => res.json()).then((data) => {
            setMovie(data.Search);
            setLoading(false);
        });
    }

}
const handleChange = (e) => {
    setSearch(e.target.value);

}

    return (
        <div>
            <Navbar handleSubmit={handleSubmit} handleChange={handleChange} v={search} />


<Carosel s={search}/>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                            {
                                movies.map(product => (
                                    <div className="col">
                                        <div className="card shadow-sm" >
                                            <img src={product.Poster} alt="product" style={{"height":"300px","width":"300px"}}  />
                                            <div className="card-body">
                                                <p className="card-text">{product.Title}</p>

                                                <div className="d-flex justify-content-between align-items-center">

                                                    <small className="text-muted">Year: {product.Year}</small>
                                                    <small className="text-muted">IMDb: {product.imdbID}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))



                            }
                        </div>
                    </div>
                </div>





        </div>
    );

};

export default Cards;