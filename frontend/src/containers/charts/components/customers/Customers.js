import React from 'react'
import {MainWrapper, Heading, GraphWrapper} from "./styles"
import {RadialChart} from 'react-vis';


const Customers = () => {
    const month = "July"
    const fakeData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ]
    return (
        <>
            <MainWrapper>
                <Heading> Categories in {month} </Heading>
                <GraphWrapper>
                    <RadialChart
                    data={fakeData}
                    width={300}
                    height={300}
                    />
                </GraphWrapper>
            </MainWrapper>
        </>
    )
}

export default Customers
