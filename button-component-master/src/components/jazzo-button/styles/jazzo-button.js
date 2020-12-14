import styled from 'styled-components'

export const Container = styled.button`
    background: palevioletred;

    ${({ variant }) => (variant === "outline") ? `

        //  put the CSS for outline here
        background: blue;
    ` : ``}

    &:hover {
        

        ${({ variant }) => (variant === "outline") ? `
        //  put the CSS for outline here
        background: red;
    ` : ``}
    }

` 