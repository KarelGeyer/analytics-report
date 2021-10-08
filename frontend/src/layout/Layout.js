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
                <Context.Provider value={{state, setState, formData, setFormData, user, setUser}}>
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
