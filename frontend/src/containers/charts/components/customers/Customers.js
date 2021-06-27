import React from 'react'
import {MainWrapper, Heading, GraphWrapper, PieWrapper} from "./styles"
import { Pie } from 'react-chartjs-2'


const Customers = () => {
    const month = "July"
    return (
        <>
            <MainWrapper>
                <Heading> Categories in {month} </Heading>
                <GraphWrapper>
                    <PieWrapper>
                        <Pie 
                            data={{
                                labels: ['65+', '55-64', '45-54', '35-44', '25-34', '18-24'],
                                datasets: [{
                                    label: 'Customers by Age',
                                    data: [5, 5.7, 10.4, 15.9, 24.1, 38.9],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 2
                                }]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    }
                                }
                            }}
                        />
                    </PieWrapper>
                    <PieWrapper>
                        <Pie 
                            data={{
                                labels: ['Female', 'Male'],
                                datasets: [{
                                    label: 'Customers by Sex',
                                    data: [30.4, 69.6],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                    ],
                                    borderWidth: 3
                                }]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        beginAtZero: false
                                    }
                                }
                            }}
                        />
                    </PieWrapper>
                    <PieWrapper>
                        <Pie 
                            data={{
                                labels: ['Desktop', 'Mobile', 'Tablet'],
                                datasets: [{
                                    label: 'Customers by Device',
                                    data: [49.7, 49.3, 1],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                    ],
                                    borderWidth: 2
                                }]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    }
                                }
                            }}
                        />
                    </PieWrapper>
                </GraphWrapper>
            </MainWrapper>
        </>
    )
}

export default Customers
