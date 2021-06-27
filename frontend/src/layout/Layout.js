import React,{useState} from 'react'
import Header from '../containers/header/Header'
import MaxWidth from "./MaxWidth"
import SectionPicker from '../containers/sectionPicker/SectionPicker'
import Charts from '../containers/charts/Charts'

import { Context } from './Context'

const Layout = () => {
    const [state, setState] = useState("Products")

    return (
        <>
            <Header />
            <MaxWidth>
                <Context.Provider value={{state, setState}}>
                    <SectionPicker state={state}/>
                    <Charts />
                </Context.Provider>
            </MaxWidth>
        </>
    )
}

export default Layout
