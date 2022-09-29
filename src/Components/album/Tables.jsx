import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Tables = (props) => {
const [products, setProducts] = React.useState([]);
React.useEffect(() => {
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => setProducts(json.products))

}
, [])
const [viewbtn, setView] = React.useState(false);
const handleView = () => {
setView(!viewbtn);

}
    return (
        <>
            <Row xs={1} md={4} className="g-4">

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={props.avatar} style={{"height":"300px","width":"300px"}}/>
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                    {props.email}
                                </Card.Text>
                                <Card.Text>
                                    {props.age}
                                </Card.Text>
                                <button onClick={handleView}>View</button>
                                {viewbtn && <Card.Text>
                                    {props.name}
                                </Card.Text>}
                            </Card.Body>
                        </Card>
                    </Col>

            </Row>
        </>
    )


};

export default Tables;