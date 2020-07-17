import React from 'react'
import Styled from '@emotion/styled'

function Cheatsheet(){
    return(
        <PageStyled>
        <div className="container">
            <header>
                <h1>Cheatsheet</h1>
            </header>
            <div className="content">
                <h3>Example</h3>
                <ul>
                    <li>I want a button with color like an apple <span className="command">//generating one red button</span></li>
                    <li>One teal button <span className="command">//generating one teal button</span></li>
                    <li>I need two grape colored button <span className="command">//generating two purple button</span></li>
                </ul>
                <h3>Components</h3>
                <ul>
                    <li>Button</li>
                    <li>Card (Coming Soon)</li>
                    <li>Alert Box (Coming Soon)</li>
                </ul>
                <h3>Colors</h3>
                <ol>
                    <li>
                        <div className="button-red"></div>
                        <span>Red</span>
                    </li>
                    <li>
                        <div className="button-green"></div>
                        <span>Green</span>
                    </li>
                    <li>
                        <div className="button-blue"></div>
                        <span>Blue</span>
                    </li>
                    <li>
                        <div className="button-pink"></div>
                        <span>Pink</span>
                    </li>
                    <li>
                        <div className="button-purple"></div>
                        <span>Purple</span>
                    </li>
                    <li>
                        <div className="button-indigo"></div>
                        <span>Indigo</span>
                    </li>
                    <li>
                        <div className="button-cyan"></div>
                        <span>Cyan</span>
                    </li>
                    <li>
                        <div className="button-teal"></div>
                        <span>Teal</span>
                    </li>
                    <li>
                        <div className="button-yellow"></div>
                        <span>Yellow</span>
                    </li>
                    <li>
                        <div className="button-dark"></div>
                        <span>Dark</span>
                    </li>
                </ol>
            </div>
        </div>
        </PageStyled>
    )
}

const PageStyled = Styled.div`
    color:#fff;
    padding-top:2rem;
    padding-left:15%;
    padding-right:15%;

    .command{
        color:#5e5b73;
        font-family: 'Source Code Pro', monospace;
        font-size: .9rem;
    }
    .content{
        ol{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: 2rem;
            padding:0;

            li{
                width: 100px;
                justify-content: center;
                align-items: center;
                display: flex;
                list-style: none;
                margin: 0px 5px 2.5rem;
                flex-direction:column;

                div{
                    width: 40px;
                    height: 40px;
                    margin-bottom: .5rem;
                }
            }
        }
    }
`

export default Cheatsheet