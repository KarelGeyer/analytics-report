import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Button } from '../styles'

const SuccessPopup = ({ link, linkName, name, event }) => {
  return (
    <Popup>
      <div>
        <div>
          <h2>
            Všechno dopadlo dobře
          </h2>
          {link === '/events' &&
            <p>
              Event <span> {name} </span> byl úspěšně <span> {event} </span>
            </p>
          }
          {link === '/' &&
            <p>
              Vaše údaje byly úspěšně {event}
            </p>
          }
          {link === '/login' &&
            <p>
              Vaše údaje byly úspěšně {event}
            </p>
          }
        </div>
        <Link to={link}>
          <Button>
            {link === '/events' && `Zpět na ${linkName}`}
            {link === '/' && `Zpět na hlavní stránku`}
            {link === '/login' && `Zpět na přihlašovací stránku`}
          </Button>
        </Link>
      </div>
    </Popup>
  )
}

export default SuccessPopup
