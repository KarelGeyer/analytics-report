import React from 'react'
import {MainWrapper, Heading, GraphWrapper, BarWrapper} from "./styles"
import { Bar } from 'react-chartjs-2'


const Categories = () => {
    const month = "July"

    return (
        <>
          <MainWrapper>
                <Heading> Categories in {month} </Heading>
                <GraphWrapper>
                  <BarWrapper>
                    <Bar 
                      data={{
                          labels: ["PS 5 konzole", "PS 5", "PC", 'Figurky > Figurky a Sošky', 'PS5 hry > akční', 'Switch', 'Nintendo Switch konzole', 'Ps4 akční hry', 'Not set', 'PS4 RPG'],
                          datasets: [{
                              label: 'Kateorie podle tržeb',
                              data: [2000, 1500, 1200, 1000, 1000, 800, 700, 200, 200, 150],
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
                  <BarWrapper>
                    <Bar 
                      data={{
                          labels: ["PS 5 konzole", "PS 5", "PC", 'Figurky > Figurky a Sošky', 'PS5 hry > akční', 'Switch', 'Nintendo Switch konzole', 'Ps4 akční hry', 'Not set', 'PS4 RPG'],
                          datasets: [{
                              label: 'Kategorie podle kusů',
                              data: [280, 80, 30, 190, 90, 60, 75, 175, 20, 85],
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

export default Categories
