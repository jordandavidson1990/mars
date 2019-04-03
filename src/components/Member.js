import React from 'react';

class Member extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.numberWithCommas = this.numberWithCommas.bind(this)
    }
    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render(){
        let difference = 750000-this.props.salary;
        
        if(this.props.salary < 750000){
            
            return(
                <div className="rejection">
                <h1>Nope!</h1>
                <p>Sorry {this.props.name}, but due to a minimum salary requirement of £750,000, you fail to meet the correct amount by £{this.numberWithCommas(difference)}. Do you have any alternative source of income? We would love for you to join us!</p>
                <img className="spaceman-img"src={require('../images/Gold3.png')} alt="need-you"></img>
                <button 
                onClick={this.props.refresh}
                className="btn continue again" >Start Again</button>
                </div>
            )
        }
        else{
        const amount = this.props.salary/2
        return(
            <div className="member-detail">
            <h1 className="congrats">Congratulations {this.props.name}!</h1>
            <p>With your salary of £{this.numberWithCommas(this.props.salary)} you can secure your spot on one of our luxury Celestial Cruisers to Mars with just 50% of your salary - that's only £{this.numberWithCommas(amount)}! We shall use the email address you have provided - {this.props.email} - as a means of communication. Please be sure to check your spam inbox if no correspondence has been received within 24 hours. We cannot guarantee that your details will not be passed on to third parties.</p>
            <p>Book now, and set your sites on the Red Planet today!</p>
            <img className="spaceman-img"src={require('../images/Gold2.png')} alt="need-you"></img>
            <button 
            onClick={this.props.handleDisplayVideo} 
            className="btn continue"
            >A Message from Our President</button>
            </div>
        )
    }
    }

}
export default Member
