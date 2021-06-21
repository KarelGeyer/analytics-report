import React from 'react'
import {MainWrapper, Heading, GraphWrapper} from "./styles"
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';


const Categories = () => {
    const month = "July"
    const fakeData = [
        {x:"Playstation 5 konzole", y: 2000},
        {x:"Playstation 5", y: 1500},
        {x:"PC", y: 1200},
        {x:"Figurky/Sošky", y: 1000},
        {x:"PS5 hry akční", y: 1000},
        {x:"SWITCH", y: 800},
        {x:"Nintendo Switch konzole", y: 700},
        {x:"PS4 hry akční", y: 200},
        {x:"not set", y: 200},
        {x:"PS4 hry RPG", y: 150},
    ]
    return (
        <>
            <MainWrapper>
                <Heading> Categories in {month} </Heading>
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

export default Categories
