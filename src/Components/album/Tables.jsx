import React from 'react';

const Tables = () => {
    const [users, setUsers] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])
    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.products))

    }, [])
console.log(products)


    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                        {
                            products.map(product => (
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
};

export default Tables;