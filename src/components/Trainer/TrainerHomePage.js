import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import TrainerNavBar from "../Pages/TrainerNavBar";
import "../styles/TrainerHomePage.css";

export default class TrainerHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <TrainerNavBar />

        <div className="home-cont">
          <p>Instructions to create Quiz Questions</p>
          <ul>
            <li>
              Select Category, Topic, Question Type and Difficulty Level of
              choice
            </li>
            <li>Enter the Question along with multiple answers</li>
            <li>Enter the correct answer</li>
            <li>Submit</li>
          </ul>
          <Link to="/CreateQuiz">
            <button className="btn btn-primary">Create New Quiz</button>
          </Link>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
