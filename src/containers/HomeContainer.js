import React, {Component} from 'react'
import Container from './Container'
import '../images/mars.ico'
import Video from '../components/Video'
import Error from '../components/Error'
import Header from '../components/Header'

class HomeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: [
                <div className="join-us-button" key={Date.now()}>
                <Header />
                <div className="grid">
        
                <img className="frontpage-img" src={require('../images/Gold.png')} alt="mars"></img>
            <button onClick={this.handleClick} className="btn join-us">Join US</button>
            </div>
            </div>
        ]
        }
        this.handleDisplayVideo = this.handleDisplayVideo.bind(this)
        this.handleErrorPage = this.handleErrorPage.bind(this)
    }
    handleDisplayVideo(){
        this.setState({display: <Video
        handleErrorPage={this.handleErrorPage}/>})
    }

    handleErrorPage(){
        this.setState({display: <Error/>})
    }

    handleClick = () =>{
        this.setState({
            display:<Container 
            handleDisplayVideo={this.handleDisplayVideo}
            refresh={this.refreshPage}/>})
    }
    refreshPage(){ 
        window.location.reload(); 
    }

    render(){
        return(
            <div>
                {this.state.display}
            </div>
        )
    }
}
export default HomeContainer;