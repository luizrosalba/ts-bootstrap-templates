import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContainersExample = () =>{
    return (
        <>
        <Container>
        <h3>1C 1R </h3>
        <Row>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
        </Row>
        </Container>

        <Container>
        <h3>2C 1R </h3>
        <Row>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
        </Row>
        </Container>

        <Container>
        <h3>3C 1R </h3>
        <Row>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
        </Row>
        </Container>
        
        <Container>
        <h3>3C 1R Middle column wider (always sums 12)</h3>
        <Row>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
            <Col xs={6} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
            <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex mollitia quis dignissimos tenetur sint voluptate deleniti alias illum numquam, minus totam vitae laudantium aspernatur rerum dolor pariatur, debitis aperiam consequatur.</Col>
        </Row>
        </Container>


        <Container>
        <h3>3C 1R middle column Auto width (always sums 12)</h3>
        <Row className="justify-content-md-center">
            <Col xs lg="2">1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">3 of 3</Col>
        </Row>
        <h5>Warning: If larger, will proceed to next row</h5>
        <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores aliquam quae itaque ut veniam? Veniam eaque cum deleniti veritatis voluptas praesentium, facere atque facilis perspiciatis accusantium fugiat maiores.</Col>
            <Col xs lg="2">
            3 of 3
            </Col>
        </Row>
        </Container>
        
    </>
        


    )
}

export default ContainersExample; 