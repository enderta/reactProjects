import React from 'react';
import './pics.css';
const Pics = () => {
    const [prods, setProds] = React.useState([]);
    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProds(json.products))
    }, [])


    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            prods.map(prod => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src={prod.thumbnail} alt="product" style={{ "height": "300px", "width": "300px" }} />
                                        <div className="card-body">
                                            <p className="card-text">{prod.title}</p>
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

export default Pics;