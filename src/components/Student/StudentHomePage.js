import React from 'react'
import Footer from '../Pages/Footer';
import NavBar from '../Pages/NavBar';
import '../styles/StudentHomePage.css';

function StudentHomePage() {
    return (
        <React.Fragment>
            <NavBar />
            <div className="home-cont">
                <h3>QUIZ INSTRUCTIONS</h3>
                <ul>
                    <li>On entering the quiz page timer will start automatically.</li>
                    <li>Complete the quiz before the time finishes.</li>
                    <li>The result for your quiz is shown after completing the timer.</li>
                    <li>Once timer completes the quiz will be finished and logged out.</li>

                </ul>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default StudentHomePage
