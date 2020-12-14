import { Component } from "react";
import React from "react";
import eventservice from "../../lib/event-service";

class Event extends Component {
    state = {
        events: {}
    }

    getEvents = async () =>{
        try {
            const theEvents = await eventservice.getAllEvents()
            this.setState({
                events: theEvents
            })
            
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
            <h1>Hello World</h1>
        )
    }
}
export default Event;