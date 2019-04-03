import React, { Component } from 'react'
import Member from './Member'

class DisplayNames extends Component{
    
    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    render(){
        
        const nameNodes = this.props.data.map(member => {
            return(
                <Member
                key={member.id}
                handleDisplayVideo={this.props.handleDisplayVideo}
                handleErrorPage={this.props.handleErrorPage}
                name={this.capitalize(member.name)}
                salary={member.salary}
                email={member.email}
                refresh={this.props.refresh}
                />
            )
        })
        return(
            <div>
            {nameNodes}
            </div>
        )
    }
}
export default DisplayNames