import React from 'react'
import {LocationReloadSection} from './styles';
import {STATIC_DATA} from '../../data/StaticData';

const LocationReload = () => {

    const redirectUrl = STATIC_DATA.URL.loginPage

    setTimeout(() => {
        const thisUser = JSON.parse(localStorage.getItem('user'))
        const isNotLoggedId = thisUser === null

        if(isNotLoggedId) {
            window.location.href = redirectUrl
        }
    }, 5000)

    return (
        <>
            <LocationReloadSection>
                <h3>
                    Nejste autorizováni pro shlédnutí obsahu, prosímte přihlašte se nebo, v případě problému, kontaktujte administrátora
                </h3>
                <p>
                    Během 5 vteřin budete přesměrováni na přihlašovací stránku, pokud se tak nestane, klikněte prosím <a href={redirectUrl}>na tento odkaz</a>
                </p>
            </LocationReloadSection>
        </>
    )
}

export default LocationReload
