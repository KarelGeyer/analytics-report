import styled from "styled-components";

export const Popup = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    background-color: ${props => props.theme.color.successBttn};
    padding-top: 70px;

    > div {
      height: 55%;
      width: 40%;
      border: 3px solid black;
      margin: 0 auto;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 40px;
      text-align: center;
      
      > div > p {
        margin-top: 40px;
        font-size: ${props => props.theme.fontSize.event};
        
        > span {
          color: ${props => props.theme.color.mediumseagreen};
          font-weight: ${props => props.theme.fontWeigth.boldText}
        }
      }
    }
`
export const Button = styled.button`
    padding: 10px;
`