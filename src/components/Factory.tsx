import React, { useState } from 'react'
import { connect } from 'react-redux'

function ComponentFactory({request}: any){
    const buttonPattern: Array<string> = ['button', 'btn',]

    function sendRequest(){
        function setColor(){
            if(/\b(red|blood|apple)\b/.test(request)){
                return 'red'
            }
            if(/\b(green|leaf)\b/.test(request)){
                return 'green'
            }
            if(/\b(blue|sky|ocean)\b/.test(request)){
                return 'blue'
            }
            
        }

        // Button
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
    )
}

const mapStateToProps = (state: any) => ({
    request: state.request.request
})

export default connect(mapStateToProps, null)(ComponentFactory);