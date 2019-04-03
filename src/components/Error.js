import React, { Component } from 'react'

class Error extends Component{
    render(){
        return(
            <div className="error-page">
            <h1 className="error-message">Error...</h1>
            <p className="no-longer-available">this page has been suspended</p>
            </div>
        )
    }
}
export default Error