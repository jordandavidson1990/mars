import React, { Component } from 'react'
import Countdown from 'react-countdown-now';


class CountdownTimer extends Component{
    
    render(){
        const Completionist = () => <span>Time's Up!</span>;
        const renderer = ({days, hours, minutes, seconds, completed})=>{
            if(completed){
                return <Completionist/>
            }else{
                return (
                <span>{days} Days, {hours} Hours, {minutes} minutes, {seconds} seconds</span>
                )         
            }
        }
        return(
            <div className="countdown">
            <h1>Countdown to Launch</h1>
            <Countdown 
            date={new Date("2019-08-26T00:00:01.000Z")}
            renderer={renderer}
            />
            </div>
        )
    }
}
export default CountdownTimer