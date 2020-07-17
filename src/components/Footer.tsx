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
    justify-content: center;
    align-items: flex-end;
    color: #5e5b73;
    text-align: center;
    padding-bottom: 2rem;
`

export default Footer