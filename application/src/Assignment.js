import React, { Component } from 'react'
import * as moment from 'moment-timezone'

export default class Assignmnet extends Component{
    render(){
        const newYork = moment().tz("America/New_York").format("dddd, MMMM Do YYYY, h:mm:ss a zz")
        const oslo = moment().tz("Europe/Oslo").format("dddd, MMMM Do YYYY, h:mm:ss a zz")
        const dhaka = moment().tz("Asia/Dhaka").format("dddd, MMMM Do YYYY, h:mm:ss a zz")

        return (
            <div>
                <h1>Visit Some Place!</h1>
                <div>
                   <p> Filters goes here </p>
                </div>
                <div>
                    <h3>Section Components</h3>
                </div>
                <div>
                </div>
            </div>
        )
    }
}