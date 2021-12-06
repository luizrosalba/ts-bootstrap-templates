import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 import './container.css';

const ResponsiveGridExample = () =>{
    return (
    <>
    <h3>https://react-bootstrap.github.io/layout/grid/</h3>
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

    <h4>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop </h4>
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
    <h4>Columns are always 50% wide, on mobile and desktop</h4>
    <Row>
        <Col className="bg" xs={6}>xs=6</Col>
        <Col className="bg" xs={6}>xs=6</Col>
    </Row>
    </Container>

    <Container>
    <h4>The Col breakpoint props also have a more complicated object prop form: 
        span: number, order: number, offset: number 
        for specifying offsets and ordering effects.</h4>
    <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        <Col xs={{ order: 1 }}>Third, but second</Col>
    </Row>
    </Container>

    <Container>
    <h4>
        The order property also supports first (order: -1) and last (order: $columns+1).
    </h4>
    <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
    </Row>
    </Container>

    <Container>
        <h4>or offsetting grid columns you can set an offset value or for a more general layout, use the margin class utilities.</h4>
    <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
    </Row>
    </Container>

    <Container>
        <h4>Setting column widths in Row#
    The Row lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, xl and xxl). For every breakpoint, you can specify the amount of columns that will fit next to each other. You can also specify auto to set the columns to their natural widths.</h4>
    <Row xs={2} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
    </Row>
    <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
    <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>

    </>


    
)}

export default ResponsiveGridExample; 