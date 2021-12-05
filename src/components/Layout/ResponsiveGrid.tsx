import React from 'react';

import ResponsiveGridExample from '../Components/Layout/ResponsiveGridExample'
const ResponsiveGrid = () =>{
    return (
        <>
            <h1>Grid</h1>
            <h4>The Col lets you specify column widths across 6 
                breakpoint sizes (xs, sm, md, lg, xl and xxl). 
                For every breakpoint, you can specify the amount of columns to span, 
                or set the prop to 
                Col lg=true 
                for auto layout widths.
            </h4>
            <ResponsiveGridExample />

        </>
    )
}

export default ResponsiveGrid; 