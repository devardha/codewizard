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
                <h2>The Secret Words</h2>
                <p>Basically you can use any command you want. Our system will detect your request and we will generate the component you want if the keyword exist in our database:)</p>
                <h3>Basic Command</h3>
                <ul>
                    <li>I want a button with color like an apple <span className="command">//generating one red button</span></li>
                    <li>One teal button <span className="command">//generating one teal button</span></li>
                    <li>I need two grape colored button <span className="command">//generating two purple button</span></li>
                </ul>
                <h3>Custom Text</h3>
                <p>if you want to use custom text, you can put your custom text between a "" (double quotes).</p>
                <ul>
                    <li>I need a red button with text "Click Me!" <span className="command">//generating one red button with text Click Me!</span></li>
                    <li>Green "Download" button  <span className="command">//generating one green button with text Download</span></li>
                </ul>
                <h3>Custom Color</h3>
                <p>if you want to use custom custom color, just put your hex color in the command. (Note: only support hex color format)</p>
                <ul>
                    <li>I need a button with color #111 <span className="command">//generating one dark button</span></li>
                    <li>"Login" button with background color #1de9b6 <span className="command">//generating one button with text Download and background color teal</span></li>
                </ul>
                <h2>Components</h2>
                <ul>
                    <li>Button</li>
                    <li>Card (Coming Soon)</li>
                    <li>Alert Box (Coming Soon)</li>
                </ul>
                <h2>Colors</h2>
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

    h1{
        font-size:3rem;
    }
    h2{
        color:#ff0099;
    }

    header{
        border-bottom: 1px solid #252244;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
    }

    .command{
        color:#5e5b73;
        font-family: 'Source Code Pro', monospace;
        font-size: .9rem;
    }
    .content{
        ul{
            margin-bottom:2rem;

            li{
                margin-bottom:.3rem;
            }
        }
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