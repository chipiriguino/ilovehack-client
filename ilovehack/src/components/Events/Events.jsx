import { Component } from "react";
import React from "react";
import eventservice from "../../lib/event-service";

class Event extends Component {
    state = {
        events: []
    }

    getEvents = async () =>{
        try {
            const theEvents = await eventservice.getAllEvents()
            this.setState({
                events: theEvents
            })
            console.log(theEvents)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.getEvents()
    }

    render(){
        const {events} = this.state
        return(
            <div>
            {events && events.length !== 0 ? events.map((event) =>{
                return (<div>
                    <h1>{event.name}</h1>
                    <h3>{event.date}</h3>
                    <h3>{event.location}</h3>
                </div>)
            }): null}
           </div>
        )
    }
}
export default Event;