import React from 'react'
import {MainWrapper, Heading, GraphWrapper, PieWrapper, BarWrapper} from "./styles"
import { Pie, Bar } from 'react-chartjs-2'

const Channels = () => {
    const month = "July"
    return (
        <>
            <MainWrapper>
                <Heading> Marketing Channels in {month} </Heading>
                <GraphWrapper>
                    <PieWrapper>
                        <Pie 
                            data={{
                                labels: ['65+', '55-64', '45-54', '35-44', '25-34', '18-24'],
                                datasets: [{
                                    label: 'Customers by Age',
                                    data: [5, 5.7, 10.4, 15.9, 24.1, 38.9],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(75, 192, 192, 0.5)',
                                        'rgba(153, 102, 255, 0.5)',
                                        'rgba(255, 159, 64, 0.5)'
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
                    <BarWrapper>
                        <Bar 
                            data={{
                                labels: ['Organic', 'PPC', 'Social Media', 'Direct', 'Referral' ],
                                datasets: [{
                                    label: 'Transakce',
                                    data: [1100, 900, 850, 1200, 800],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(75, 192, 192, 0.5)',
                                        'rgba(153, 102, 255, 0.5)',
                                        'rgba(255, 159, 64, 0.5)'
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
                                },
                                {
                                    label: 'Tržby v tisících',
                                    data: [1950, 950, 950, 2500, 1600],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(75, 192, 192, 0.5)',
                                        'rgba(153, 102, 255, 0.5)',
                                        'rgba(255, 159, 64, 0.5)'
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
                    </BarWrapper>
                </GraphWrapper>
            </MainWrapper>
        </>
    )
}

export default Channels
