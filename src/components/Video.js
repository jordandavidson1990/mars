import React, {Component} from 'react';
import "../images/yer-maw.mp4"
import "../images/Purple4.png"

class Video extends Component{
    render(){
        return(
            <div className="welcome">
            <h1>Welcome Aboard!</h1>
            <div className="video">
            <iframe width="966" height="543" title="youtube-clip" id="myVideo" src="https://www.youtube.com/embed/pC19DVWmGwg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            <p className="promotional-speech"
            >You heard what he said. Book early to avoid disappointment, and join our president today. Your new life on Mars is just a credit check away!</p>
            <div className="video">
            <button className="btn continue"
            onClick={this.props.handleErrorPage}>Continue to Credit Check</button>
            </div>
            </div>
            )
    }
}

export default Video