import styled from 'styled-components';

export const Section = styled.section`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const Wrapper = styled.div`
	width: 100%;
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

    > div {
        height: 200px;
        width: 700px;
        display: flex;
        justify-content: space-evenly;
    }
`
export const Card = styled.div`
	position: relative;
    height: 100%;
    width: 280px;
    transition: transform 1s;

    &:hover {
        transform: scale(1.1);
    }

    > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    > h3 {
        margin: 0;
	    width: 100%;
	    height: 100%;
	    font-size: 3rem;
        color: ${props => props.theme.color.white};
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    position: absolute;
	    background-color: rgba(0, 0, 0, 0.4);
        background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0.7) 100%
        );
	    text-shadow: 
        0 2px 3px #747474, 
        1px 3px 4px #222, 
        0 8px 3px #474747, 
        0 11px 4px #747474,
        0 14px 4px #565656
    }
`