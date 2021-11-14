import styled from 'styled-components';

export const Section = styled.section`
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 0;

    > button {
      margin-top: 20px;
      padding: 10px;
      width: 30%;
      border-radius: 15px;
    }

    > ul {
      border: 1px solid ${props => props.theme.color.primary};
      display: flex;
      list-style-type: none;
      margin-top: 10px;
      padding: 5px;
      border-radius: 10px;
      background-color: ${props => props.theme.color.white};

      > li {
        margin: 0 10px;

        > a {
          padding: 3px;
          text-decoration: none;
          color: ${props => props.theme.color.primary};
        }
      }
    }
`
export const Wrapper = styled.div`
    height: 500px;
	  width: 80%;
    display: flex;
	  flex-direction: column;
	  align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme.color.backgroundSecondary};
    padding-top: 20px;

    > div {
      height: 50px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      margin-top: 10px;
      transition: transform 400ms;

      &:hover {
        transform: scale(1.02);
      }

      > div {
        padding: 10px;
        font-weight: ${props => props.theme.fontWeigth.boldText};
        font-size: ${props => props.theme.fontSize.event};
      }

      > .date {
        width: 20%;
        background-color: ${props => props.theme.color.mediumseagreen};
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }

      > .event {
        width: 50%;
        background-color: ${props => props.theme.color.blueviolet};
      }

      > .author {
        width: 20%;
        background-color: ${props => props.theme.color.firebrick};
      }

      > .link {
        width: 10%;
        background-color: ${props => props.theme.color.dimgray};
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;

        > a > img {
          padding-left: 20px;
          height: 30px;
          cursor: pointer;
        }
      }
    }

    > .create-event {
      margin-bottom: 15px;
      border-width: 2px;
    }
`
export const Card = styled.div`
    width: 30%;
    height: 400px;
    margin-top: 40px;
    border-radius: 15px;
    background-color: ${props => props.theme.color.backgroundSecondary};
    font-weight: ${props => props.theme.fontWeigth.boldText};
    font-size: ${props => props.theme.fontSize.event};

    > div {
      border-bottom: 1px solid ${props => props.theme.color.backgroundMain};
      height: 18%;
      padding: 10px;
      display: flex;
      justify-content: center;

      > span {
        width: 50%;
        text-align: center;
        margin: 5px;

        > input {
          max-width: 100%;
        }
      }

      > img {
        position: absolute;
        height: 40px;
        margin-left: 150px;
        cursor: pointer;
      }

      > input {
        max-width: 50%;
      }
    }

    > .content {
      height: 65%
    }

    > .info {
      height: 15%;
      border-bottom: none;
    }
`
