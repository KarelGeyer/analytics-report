import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Button } from '../styles'

const ErrorPopup = ({ link, linkName, error }) => {

  return (
    <Popup>
      <div>
        <div>
          <h2>
            Něco se pokazilo
          </h2>
          {error &&
            <p>
              {error.message}
            </p>
          }
        </div>
        <Link to={link}>
          <Button>
            Zpět na {linkName}
          </Button>
        </Link>
      </div>
    </Popup>
  )
}

export default ErrorPopup
