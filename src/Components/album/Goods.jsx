import React from 'react';
import Tables from "./Tables";

const Goods = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.products))

    }, [])

    const [viewbtn, setView] = React.useState(false);
    const handleView = () => {
        setView(!viewbtn);

    }
    console.log(products)
    return (
        <>
            {
                products.map((product) => (
                    <Tables
                        image={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        click={handleView}
                        view={viewbtn}
                    />
                ))
            }
        </>
    );
};

export default Goods;