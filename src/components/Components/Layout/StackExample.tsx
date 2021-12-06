import React from 'react';

import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const StackExample = () =>{
    return (
    <>

    <h4>Vertical Stacks are vertical by default and stacked items are full-width by default. Use the gap prop to add space between items.</h4>
    <Stack gap={3}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border">Second item</div>
    <div className="bg-light border">Third item</div>
    </Stack>
   
    <h4>Horizontal Use direction="horizontal" for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use the gap prop to add space between items.</h4>
    <Stack direction="horizontal" gap={3}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border">Second item</div>
    <div className="bg-light border">Third item</div>
    </Stack>

    <h4>Using horizontal margin utilities like .ms-auto as spacers:</h4>
    <Stack direction="horizontal" gap={3}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border ms-auto">Second item</div>
    <div className="bg-light border">Third item</div>
    </Stack>

    <h4>And with vertical rules:</h4>
    <Stack direction="horizontal" gap={3}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border ms-auto">Second item</div>
    <div className="vr" />
    <div className="bg-light border">Third item</div>
    </Stack>

    <h4>Use a vertical Stack to stack buttons and other elements:</h4>
    <Stack gap={2} className="col-md-5 mx-auto">
    <Button variant="secondary">Save changes</Button>
    <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <h4>Create an inline form with a horizontal Stack:</h4>
    <Stack direction="horizontal" gap={3}>
    <Form.Control className="me-auto" placeholder="Add your item here..." />
    <Button variant="secondary">Submit</Button>
    <div className="vr" />
    <Button variant="outline-danger">Reset</Button>
    </Stack>
    </>
)}

export default StackExample; 