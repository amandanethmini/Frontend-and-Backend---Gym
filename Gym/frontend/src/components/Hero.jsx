import React from 'react'
import { Router } from 'react-router-dom'

const Hero = () => {
    return (

        <section className='hero' id="home" >
            <div className='content'>
                <div className='title'>
                    <h1>LET'S</h1>
                    <h1>GET</h1>
                    <h1>MOVING</h1>
                </div>
                <div className='sub-title'>
                    <p>Your Journey to Fitness Star</p>
                    <p>Unleash Your Potential</p>
                </div>
                <div className='buttons'>
                    <button onClick={"Contact"}>Start Your Journey</button>
                    <button>Discover Your Plan</button>
                </div>
            </div>
        </section>

    )
}

export default Hero