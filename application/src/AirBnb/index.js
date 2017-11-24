import React, { Component } from 'react'

import './style.css'
import ProductList from './ProductList'


export default class AirBnbApp extends Component {
    render() {
        return (
            <div>
            <h3>Explore Miami</h3>
            <section className="container-btn default">
                <button>Apartment</button>
                <button>Small Room</button>
                <button>Shared Room</button>
            </section>
            <h3>Apartment in Miami</h3>
            <section className="container row">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </section>
            <h3>Small Room In Miami</h3>
            <section className="container row">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </section>
            <h3>Shared Room In Miami</h3>
            <section className="container row">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </section>
            </div>
        )
    }
}