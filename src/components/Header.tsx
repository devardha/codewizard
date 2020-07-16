import React, { FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'
import { sendRequest } from '../redux/actions/requestAction'

const Header:FunctionComponent = (props: any) => {

    const [ request, setRequest ] = useState<string | undefined>(undefined)

    const sendRequest = (e: any) => {
        e.preventDefault()
        props.sendRequest(request)
    }

    return(
        <>
        <header className="header">
            <h1>Just Say The Magic Words!</h1>
            <form className="command-input" onSubmit={sendRequest}>
                <input type="text" placeholder="a red button with rounded corner" onChange={(e) => setRequest(e.target.value)}/>
                <button>Generate!</button>
            </form>
        </header>
        </>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    sendRequest: (req: string) => dispatch(sendRequest(req))
})

export default connect(null, mapDispatchToProps)(Header);