import React,{useState, useEffect} from 'react'
import Header from '../containers/header/Header'
import MaxWidth from "./MaxWidth"
import SectionPicker from '../containers/sectionPicker/SectionPicker'
import Charts from '../containers/charts/Charts'
import AddData from '../containers/addData/AddData'
import LoginForm from '../containers/loginForm/LoginForm'
import { Switch, Route } from 'react-router';
import { Context } from './Context'
import dataStructure from "../data/dataStucture"
import LocationReload from '../containers/loginForm/LocationReload'

const Layout = () => {
    const [state, setState] = useState("Products")
    const [formData, setFormData] = useState(dataStructure)
    const [chartsData, setChartsData] = useState()
    const [selectedMonth, setSelectedMonth] = useState(() => {
            const thisDate = new Date()
            const thisMonth = thisDate.getMonth()
            const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
            "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]

            return months[thisMonth]
        }
    )
    const [user, setUser] = useState(null)

    useEffect(() => {
        const thisUser = JSON.parse(localStorage.getItem('user'))
        setUser(thisUser)
    }, [])

    return (
        <>
            <Header />
            <MaxWidth>
            <Switch> 
                <Route path="/login" component={LoginForm} />
                <Context.Provider value={
                        {
                            state, setState,
                            formData, setFormData,
                            chartsData, setChartsData,
                            user, setUser,
                            selectedMonth, setSelectedMonth
                        }
                    }>
                    {user === null ?
                            <LocationReload />
                        : <> 
                            <SectionPicker state={state}/>
                            <Route path="/charts" component={Charts} />
                            <Route path="/addData" component={AddData} />
                        </>
                    }
                </Context.Provider>
            </Switch> 
            </MaxWidth>
        </>
    )
}

export default Layout
