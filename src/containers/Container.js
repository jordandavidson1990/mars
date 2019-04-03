import React, {Component} from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import DisplayNames from '../components/DisplayNames'
import CountdownTimer from '../components/CountdownTimer'
import '../images/mars.ico'


class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            displayForm:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.setState({displayForm:[
        <Form 
        key={Date.now()}
        onFormSubmit={this.handleSubmit} 
        />]})
    }

    handleSubmit(submittedData){
        submittedData.id = Date.now();
        const updatedNames = [...this.state.data, submittedData]
        this.setState({data: updatedNames, displayForm:[]});
    }

    render(){
        return(
            <div className="overall-container">
            <Header />
            <CountdownTimer />
            <DisplayNames 
            data={this.state.data}
            handleDisplayVideo={this.props.handleDisplayVideo}
            handleErrorPage={this.props.handleErrorPage}
            refresh={this.props.refresh}
            />
            {this.state.displayForm}
            
            
            </div>
        )
    }
}
export default Container