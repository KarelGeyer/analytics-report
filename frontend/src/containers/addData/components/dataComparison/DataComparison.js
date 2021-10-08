import React, {useContext} from 'react'
import { Context } from '../../../../layout/Context'
import { Link } from 'react-router-dom';
import {InputWrapper, Input, Label, NextButton} from "./styles"

const DataComparison = () => {

    const {formData} = useContext(Context)
    const {dataComparison} = formData
    const currentYearArray = Object.keys(dataComparison.currentYearData)
    const lastYearData = Object.keys(dataComparison.currentYearData)
    const emptycurrentYearArray = []
    const testfce = (e, res) => {
        emptycurrentYearArray.push(...emptycurrentYearArray, e.target.value)
        console.log(emptycurrentYearArray)
    }
    console.log(lastYearData)
    return (
        <>
            <h2> Data </h2>
            <h3> Data for this year </h3>
            {currentYearArray.map((res, i) => 
                <InputWrapper key={res}>
                <Label 
                    required 
                    type="text" 
                    placeholder="add product name">
                       values for {res.toLocaleLowerCase()}
                </Label>
                <Input 
                    required
                    name={res}
                    key={i}
                    type="text"
                    placeholder="add the value" 
                    pattern="[0-9]"
                    onChange={(e, i) => testfce(e, res)}
                    />
                </InputWrapper>
            )}
            <h3> Data for last year </h3>
            {lastYearData.map((res, i) => 
                <InputWrapper key={res}>
                <Label
                    required 
                    type="text" 
                    placeholder="add product name">
                       values for {res.toLocaleLowerCase()}
                </Label>
                <Input 
                    required
                    name="users" 
                    type="text"
                    placeholder="add the value" 
                    />
                </InputWrapper>
            )}   
            <Link to="/addData/CustomersData">
                <NextButton> NEXT </NextButton>            
            </Link>
        </>
    )
}

export default DataComparison
