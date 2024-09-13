import React from 'react'

const WorkoutSessions = () => {
    return (
        <section className='workout_session' id="workout" >
            <div className='wrapper'>
                <h1>TOP WORKOUT SESSION</h1>
                <p>Explore the most popular workout sessions and reach your fitness goals</p>
                <img src="/img11.png" alt="workout" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMP</h1>
                <p>Join our featured bootcamp for an intense and rewarding fitness experience.</p>
                <div className="bootcamps">
                    <div>
                        <h4>Get results with our high-energy bootcamp sessions.</h4>
                        <p>Intense workout classes designed to enhance fitness quickly through dynamic and vigorous exercises.</p>
                    </div>
                    <div>
                        <h4>Benefit from expert coaching tailored to your needs.</h4>
                        <p>Personalized instruction from qualified trainers who provide customized workout plans and guidance.</p>
                    </div>
                    <div>
                        <h4>Join a community that motivates and supports your fitness journey.</h4>
                        <p>A group of participants who offer encouragement and motivation, creating a collaborative and uplifting environment.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkoutSessions