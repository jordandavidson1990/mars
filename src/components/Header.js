import React, {Component} from 'react'

class Header extends Component{
    render(){
        return(
            <div className="header">
            <h1 className="header-text"> Mars Alternative Relocation Service </h1>
            <img className="background-img" src={require("../images/B+W3.png")} alt="logo"/>
            </div>
        )
    }
}
export default Header