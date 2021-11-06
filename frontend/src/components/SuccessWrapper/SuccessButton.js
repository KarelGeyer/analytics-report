import React from 'react'
import { Wrapper } from './styles'

const SuccessWrapper = ({ children, success }) => {
  console.log(success)
  return (
    <Wrapper style={success ? { border: "3px solid #00FF00", color: "#00FF00" } : { border: "3px solid #000", color: "#FFF" }}>
      {children}
    </Wrapper>
  )
}

export default SuccessWrapper
