import React, {Component} from 'react'
import "../images/Gold3.png"


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary:"",
            dob:"",
            email:"",
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSalaryChange = this.handleSalaryChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const name = this.state.name.trim();
        const salary = this.state.salary;
        const dob = this.state.dob;
        const email = this.state.email.trim();
        if (!name || !salary || !dob || !email){
            return
        }
        this.props.onFormSubmit({name:name, salary:salary, dob:dob, email:email})
        this.setState({name:'', salary:'', dob:'', email:''})

    }

    handleNameChange(event){
        this.setState({name:event.target.value})
    }
    handleSalaryChange(event){
        this.setState({salary:event.target.value})
    }
    handleDateOfBirthChange(event){
        this.setState({dob:event.target.value})
    }
    handleEmailChange(event){
        this.setState({email:event.target.value})
    }

    render(){


        return(
            <form className="member-form" 
            onSubmit={this.handleSubmit}>
            <h3>Sign up now!</h3>
            <div className="input-boxes">
            <div className="filled-boxes">
            <input
                type="text"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleNameChange}
                required={true}
            />
            <input
                type="date"
                placeholder="Date of Birth"
                value={this.state.dob}
                onChange={this.handleDateOfBirthChange}
                required={true}
                max="2001-03-03"
                min="1900-01-01"
                />
            <input
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required={true}
                />

            <input
                type="number"
                placeholder="Salary"
                min="0"
                step="100"
                value={this.state.salary}
                onChange={this.handleSalaryChange}
                required={true}/>
                </div>
            <input 
                className="btn"
                type="submit"
            />
            
            </div>
            <img className="spaceman-img" src={require("../images/Gold3.png")} alt="logo"/>
            </form>
        )
    }
}
export default Form