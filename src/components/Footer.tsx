import React from 'react'
import Styled from '@emotion/styled'

function Footer(){
    return(
        <FooterStyled>
            Made with <span>&#10084;&#65039;</span> and a keyboard by devardha
        </FooterStyled>
    )
}

const FooterStyled = Styled.footer`
    height: 150px;
    display: flex;
    width: 100%;
    margin-top: 3rem;
    justify-content: center;
    align-items: flex-end;
    color: #4e4a75;
    text-align: center;
    padding-bottom: 2rem;
`

export default Footer