import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.types.toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.types}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert