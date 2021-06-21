import React from 'react'
import {MainWrapper, Heading, GraphWrapper} from "./styles"
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';


const Products = () => {
    const month = "July"
    const fakeData = [
        {x:"Playstation 5 825GB", y: 2000},
        {x:"Playstation 5 825GB White", y: 1500},
        {x:"Nintendo Switch Neon Red/Blue", y: 1200},
        {x:"Playstation Plus členství 12", y: 1000},
        {x:"Ratchet a Clank: Rift Apart", y: 1000},
        {x:"Kingdome Come Soška", y: 800},
        {x:"D&D Enhanced Edition", y: 700},
        {x:"Cyberpunk 2077", y: 200},
        {x:"Nintendo Switch 2019", y: 200},
        {x:"Resident Evil Village", y: 150},
    ]
    return (
        <>
            <MainWrapper>
                <Heading> Products in {month} </Heading>
                <GraphWrapper>
                    <XYPlot margin={{bottom: 120, left: 60}} xType="ordinal" width={500} height={300}>
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis tickLabelAngle={-40} />
                      <YAxis />
                      <VerticalBarSeries
                        data={fakeData}
                      />
                    </XYPlot>
                    <XYPlot margin={{bottom: 120, left: 60}} xType="ordinal" width={500} height={300}>
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis tickLabelAngle={-40} />
                      <YAxis />
                      <VerticalBarSeries
                        data={fakeData}
                      />
                    </XYPlot>
                </GraphWrapper>
            </MainWrapper>
        </>
    )
}

export default Products
