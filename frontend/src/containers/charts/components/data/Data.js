import React from 'react'
import { MainWrapper, GraphWrapper, BarWrapper, PieWrapper, Heading} from './styles'
import { Bar, Pie } from 'react-chartjs-2'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const styles = () => {
    const currentDate = 'July, 2021'
    const lastYearDate= 'July, 2020'
    const fakeData = {
        head: [ 'Uživatelé', 'Noví uživatelé', 'Návštěvy', 'Konverzní poměr', 'Transakce', 'Tržby' ],
        data: [141758, 111839, 268396, 2.3, 5456, 8458833],
        lastYearData: [117012, 89802, 217488, 2.4, 4430, 5682747],
    }
    return (
        <>
            <MainWrapper>
                <Heading> Data in {currentDate} </Heading>
                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th> Year </th>
                        {fakeData.head.map((res, i) => 
                            <th key={i}> {res} </th>
                            )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th> {currentDate} </th>
                        {fakeData.data.map((res, i) => 
                            i === 3 ? 
                            <th key={i}> {res}% </th>
                            :  <th key={i}> {res} </th>
                            )}
                      </tr>
                      <tr>
                        <th> {lastYearDate} </th>
                        {fakeData.lastYearData.map((res, i) => 
                            i === 3 ? 
                            <th key={i}> {res}% </th>
                            :  <th key={i}> {res} </th>
                            )}
                      </tr>
                    </tbody>
                </Table>
                
                <GraphWrapper>
                <BarWrapper>
                        <Bar 
                            data={{
                                labels: fakeData.head.slice(0,3),
                                datasets: [{
                                    label: currentDate,
                                    data: fakeData.data.slice(0,3),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                    ],
                                    borderWidth: 2
                                },
                                {
                                    label: lastYearDate,
                                    data: fakeData.lastYearData.slice(0,3),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
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
                    </BarWrapper>
                    <PieWrapper>
                        <Pie 
                            data={{
                                labels: [currentDate, lastYearDate],
                                datasets: [{
                                    label: currentDate,lastYearDate,
                                    data: [fakeData.data[5], fakeData.lastYearData[5]],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.5)',
                                        'rgba(203, 50, 255, 0.5)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(54, 162, 235, 1)',
                                    ],
                                    borderWidth: 2
                                },]
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
                                labels: [currentDate, lastYearDate],
                                datasets: [{
                                    label: currentDate,lastYearDate,
                                    data: [fakeData.data[4], fakeData.lastYearData[4]],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                    ],
                                    borderWidth: 2
                                },]
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

export default styles
