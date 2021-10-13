import React, {useContext} from 'react'
import { Context } from '../../../../layout/Context'
import {MainWrapper, Heading, GraphWrapper, BarWrapper} from "./styles"
import { Bar } from 'react-chartjs-2'


const Categories = () => {
    const {chartsData, selectedMonth} = useContext(Context)
    const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth)
    const data = filterDataByMonth[0]

    return (
        <>
            {data ?
                (<MainWrapper>
                    <Heading> Kategorie v měsíci {selectedMonth} </Heading>
                    <GraphWrapper>
                      <BarWrapper>
                        <Bar 
                          data={{
                            labels: data && data.categoriesByValue.names,
                            datasets: [{
                                  label: 'Kateorie podle tržeb',
                                  data: data && data.categoriesByValue.values,
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
                            labels: data && data.categoriesByQuantity.names,
                              datasets: [{
                                  label: 'Kategorie podle kusů',
                                  data: data && data.categoriesByQuantity.values,
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
                </MainWrapper>) :
                (
                    <MainWrapper>
                        <Heading>Měsíc {selectedMonth} zatím nebyl vyhodnocen</Heading>
                    </MainWrapper>
                )
            }
        </>
    )
}

export default Categories
