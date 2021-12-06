import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 import './container.css';

const ResponsiveGridExample = () =>{
    return (
    <>
    
    <Container>
    <h4>The Col lets you specify column widths across 6 
        breakpoint sizes (xs, sm, md, lg, xl and xxl). 
        For every breakpoint, you can specify the amount of columns to span, 
        or set the prop to Col lg=true for auto layout widths.
    </h4>
    <Row>
        <Col className="bg" sm={8}>sm=8</Col>
        <Col className="bg" sm={4}>sm=4</Col>
    </Row>
    <Row>
        <Col className="bg" sm>sm=true</Col>
        <Col className="bg" sm>sm=true</Col>
        <Col className="bg" sm>sm=true</Col>
    </Row>
    </Container>

    <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <h4>You can also mix and match breakpoints to create different grids depending on the screen size.
    </h4>
    <Row>
        <Col className="bg" xs={12} md={8}>
        xs=12 md=8
        </Col>
        <Col className="bg" xs={6} md={4}>
        xs=6 md=4
        </Col>
    </Row>

    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <Row>
        <Col className="bg" xs={6} md={4}>
        xs=6 md=4
        </Col>
        <Col className="bg" xs={6} md={4}>
        xs=6 md=4
        </Col>
        <Col className="bg" xs={6} md={4}>
        xs=6 md=4
        </Col>
    </Row>

    {/* Columns are always 50% wide, on mobile and desktop */}
    <Row>
        <Col className="bg" xs={6}>xs=6</Col>
        <Col className="bg" xs={6}>xs=6</Col>
    </Row>
    </Container>
    </>
)}

export default ResponsiveGridExample; 