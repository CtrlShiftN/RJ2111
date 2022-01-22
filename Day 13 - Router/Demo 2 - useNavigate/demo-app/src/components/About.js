import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    return (
        <div className='aboutContent'>
            <p>This is about page</p>
            <button onClick={(e) => { navigate('/') }}>Back to home</button>
        </div>
    )
}
export default About;