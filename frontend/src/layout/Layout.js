import React,{useState} from 'react'
import Header from '../containers/header/Header'
import MaxWidth from "./MaxWidth"
import SectionPicker from '../containers/sectionPicker/SectionPicker'
import Charts from '../containers/charts/Charts'
import AddData from '../containers/addData/AddData'
import { Switch, Route } from 'react-router';
import { Context } from './Context'
import dataStructure from "../data/dataStucture"

const Layout = () => {
    const [state, setState] = useState("Products")
    const [formData, setFormData] = useState(dataStructure)

    return (
        <>
            <Header />
            <MaxWidth>
            <Switch> 
                <Context.Provider value={{state, setState, formData, setFormData}}>
                    <SectionPicker state={state}/>
                    <Route path="/charts" component={Charts} />
                    <Route path="/addData" component={AddData} />
                </Context.Provider>
            </Switch> 
            </MaxWidth>
        </>
    )
}

export default Layout
