import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Pages/Footer'
import NavBar from '../Pages/NavBar'
import '../styles/QuizList.css'
import quizbg from '../../images/quizbg.png';

export default class QuizList extends Component {
    render() {
        return (
            <React.Fragment >
                <NavBar />
                <div style={{ backgroundImage: `url(${quizbg})`, backgroundBlendMode: 'lighten', width: '100%' }}>
                    <div className="quiz-container">
                        <form className="QuizList">
                            <h3>List of Quizes</h3>
                            <Link to="/Quiz1">
                                <li className="btn btn-secondary btn-quiz">Quiz 1</li>
                            </Link>
                            <br />
                            <Link to="/Quiz2">
                                <li className="btn btn-secondary btn-quiz">Quiz 2</li>
                            </Link>
                        </form>
                    </div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
}
