import styled from 'styled-components'

export const Container = styled.button`
    background: #E0E0E0;
    color: #3F3F3F;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    padding: 0.5rem 0.8rem;
    font-weight: bold;
    border: none;
    outline: none;

    ${({ variant }) => (variant === "outline") ? `

        //  put the CSS for outline here
 
    ` : ``}

    &:hover {
        background: #AEAEAE;
        box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);

        ${({ variant }) => (variant === "outline") ? `

        //  put the CSS for outline:hover here
        
    ` : ``}
    }

    &:disabled {
        color: #9E9E9E;
        background: #E0E0E0;
        box-shadow: none;

        ${({ variant }) => (variant === "text") ? `
            background: none;        
    ` : ``}
    }

` 