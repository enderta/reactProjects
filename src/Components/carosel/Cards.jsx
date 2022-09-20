import React from 'react';

const Cards = () => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5f5f5e5d5f5e5d5f5e5d5f5e5d5f5e5d&language=en-US&page=1')
            .then(response => response.json())
            .then(json => setMovies(json.results))
            .then(setLoading(false))
    }
    , [])
console.log(movies)

    return (
        <div>
            <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                            {
                                movies.map(product => (
                                    <div className="col">
                                        <div className="card shadow-sm" >
                                            <img src={product.thumbnail} alt="product" style={{"height":"300px","width":"300px"}}  />
                                            <div className="card-body">
                                                <p className="card-text">{product.title}</p>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <small className="text-muted">{product.price}$</small>
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
        </div>
    );
};

export default Cards;