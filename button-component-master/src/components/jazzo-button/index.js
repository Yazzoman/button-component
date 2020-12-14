import React from 'react'
import { Container } from './styles/jazzo-button'

export default function JazzoButton({ children, ...restProps }){
    return (
        <Container {...restProps}>
            { children }
        </Container>
    )
}