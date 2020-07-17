import React, { useState } from 'react'
import { connect } from 'react-redux'
import image from '../assets/images/me.png'
import jsxToString from 'jsx-to-string';

function ComponentFactory({request}: any){
    const buttonPattern: Array<string> = ['button', 'btn',]
    const [ switchWindow, setSwitchWindow ] = useState<string>('preview')

    function sendRequest(){

        // Color Identifier
        function setColor(){
            if(/\b(red|blood|apple)\b/.test(request)){
                return '#ff1744'
            }
            if(/\b(green|leaf)\b/.test(request)){
                return '#00e676'
            }
            if(/\b(blue|sky|ocean)\b/.test(request)){
                return '#2979ff'
            }
            if(/\b(pink)\b/.test(request)){
                return '#f50057'
            }
            if(/\b(purple|grape)\b/.test(request)){
                return '#7b1fa2'
            }
            if(/\b(indigo)\b/.test(request)){
                return '#3f51b5'
            }
            if(/\b(cyan)\b/.test(request)){
                return '#26c6da'
            }
            if(/\b(teal)\b/.test(request)){
                return '#1de9b6'
            }
            if(/\b(yellow)\b/.test(request)){
                return '#ffea00'
            }
            
        }

        let color: string | undefined = setColor()
        const customColor = request.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/)

        const buttonStyle = {
            padding: '.75rem 1rem',
            border: 'none',
            background: customColor ? customColor : color,
            color: '#fff'
        }

        const text = request.match(/(?<=")(.*)(?=")/)

        // Button
        if(buttonPattern.some(el => request?.includes(el))){
            const html = <button style={buttonStyle}>{text ? text[0] : 'Button'}</button>

            return(
                html
            )
        }

        // Secreet Component
        if(request === 'i love you'){
            return(
                <div className="message">I Love You Too:)</div>
            )
        }
        if(request === 'ardha'){
            return(
                <div className="me">
                    <img src={image} alt="devardha"/>
                </div>
            )
        }
    }

    const switchWindows = () => {
        switch (switchWindow) {
            case 'preview':
                return (
                    <div className="window-body">
                       {sendRequest()}
                    </div>
                )
            case 'html':
                return(
                    <div className="window-body html-body">
                        {sendRequest()? jsxToString(sendRequest()) : ''}
                    </div>
                )
            default:
                return <div></div>
        }
    }

    return(
        <>
        <div className="container">
            <div className="window">
                <div className="window-header">
                    <div className="window-button">
                        <div className="btn red"></div>
                        <div className="btn yellow"></div>
                        <div className="btn green"></div>
                    </div>
                    <div className="window-title">Component Previewer</div>
                    <div className="switch-button">
                        <span className={`preview ${(switchWindow === 'preview') ? 'active' : ''}`} onClick={() => setSwitchWindow('preview')}>PREVIEW</span>
                        <span className={`html ${(switchWindow === 'html') ? 'active' : ''}`} onClick={() => setSwitchWindow('html')}>HTML</span>
                    </div>
                </div>
                {switchWindows()}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    request: state.request.request
})

export default connect(mapStateToProps, null)(ComponentFactory);