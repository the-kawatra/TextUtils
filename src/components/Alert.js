import React from 'react'

function Alert(props) {
    return (
        <div style={{height: '7vh'}}>
        {props.alert && <div className={`alert alert-${props.alert.types.toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.types}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert