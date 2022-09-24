import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 200, 250, 300, 350, 400, 450, 500];

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
           <Masonry columns={4} spacing={2}>
        {prods.map((item) => (
            <Box key={item.id} sx={{ height: heights[Math.floor(Math.random() * heights.length)] }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <img src={item.thumbnail} alt="product" style={{ "height": "300px", "width": "300px" }} />
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                </div>
            </Paper>
            </Box>
        ))}
    </Masonry>



        </div>
    );


};



export default Mason;