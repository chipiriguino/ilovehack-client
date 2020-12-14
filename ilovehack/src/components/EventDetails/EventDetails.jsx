import { Component } from "react";
import React from "react";
import eventservice from "../../lib/event-service";

class EventDetail extends Component {
    state = {
        event: {}
    }

    getEvent = async () =>{
        try {
            const {params} = this.props.match
            const theEvent = await eventservice.getTheEvent(params.id)
            this.setState({
                event: theEvent
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.getEvent()
    }

    render(){
        const {event} = this.state
        return(
            <h1>Hello World</h1>
        )
    }
}
export default EventDetail;