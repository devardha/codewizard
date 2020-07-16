import React, { FunctionComponent, useState } from 'react'

const Header:FunctionComponent = () => {

    const [ request, setRequest ] = useState<string | undefined>(undefined)
    console.log(request)

    const buttonPattern: Array<string> = ['button', 'btn',]

    const redPattern: Array<string> = ['red', 'blood','apple']
    const greenPattern: Array<string> = ['green', 'tree','leaf']
    const bluePattern: Array<string> = ['blue', 'sky','ocean']

    function sendRequest(){
        // Button
        function setColor(){
            if(redPattern.some(el => request?.includes(el))){
                return 'red'
            }
            if(greenPattern.some(el => request?.includes(el))){
                return 'green'
            }
            if(bluePattern.some(el => request?.includes(el))){
                return 'blue'
            }
            
        }
        if(buttonPattern.some(el => request?.includes(el))){
            let color: string | undefined = setColor()

            return(
                <button
                className={`${color ? `button-${color}` : ""}`}
                >Button</button>
            )
        }
    }

    return(
        <>
        <header className="header">
            <h1>Just Say The Magic Words!</h1>
            <input type="text" placeholder="a red button with rounded corner" onChange={(e) => setRequest(e.target.value)}/>
        </header>
        <div className="container">
            <div className="window">
                <div className="window-header">
                    <div className="window-button">
                        <div className="btn red"></div>
                        <div className="btn yellow"></div>
                        <div className="btn green"></div>
                    </div>
                </div>
                <div className="window-body">
                    {sendRequest()}
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;