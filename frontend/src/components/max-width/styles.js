import styled from 'styled-components';

export const MaxWidthSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BasicLayout = styled.div`
    width: ${props => props.theme.width.maxWidth};
    min-height: ${props => props.theme.height.contentHeight};
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.color.backgroundMain};
    border-radius:  ${props => props.theme.border.bottomRadius};
`