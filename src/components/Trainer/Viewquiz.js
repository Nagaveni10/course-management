import React, { Component } from "react";
import { getAllQuiz, deleteQuiz } from "../../actions/quizActions";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Viewquiz.css";
import TrainerNavBar from "../Pages/TrainerNavBar";
import Footer from "../Pages/Footer";

class Viewquiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuiz: [],
    };
  }
  componentDidMount() {
    this.props.getAllQuiz();
  }

  handleDeleteClick = (id, index) => {
    let result = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (result) {
      let splicedQuiz = this.props.allQuiz.splice(index, 1);
      this.props.deleteQuiz(id);
    }
  };

  render() {
    return (
      <React.Fragment>
        <TrainerNavBar />
        <div className="view-quiz container">
          <h1>Quiz</h1>
          <div className="quiz-questn">
            <div className="create-quiz">
              <Link
                to="/createquiz"
                className="create-quiz-btn btn btn-primary"
              >
                CREATE QUIZ
              </Link>
            </div>
            {this.props.allQuiz.map((quiz, index) => {
              return (
                <div className="quiz bg-tertiary" key={quiz.id}>
                  <div className="quiz-actions justify-content-end d-flex  gap-3">
                    <Link to={`/UpdateQuestion/${quiz.id}`}>
                      <button className="btn btn-warning btn-sm">
                        UPDATE QUESTION
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.handleDeleteClick.bind(
                        this,
                        quiz.id,
                        index
                      )}
                    >
                      DELETE QUESTION
                    </button>
                  </div>
                  <div className="quiz-data">
                    <p>
                      <b>Category :</b>
                      {quiz.category}
                    </p>
                    <p>
                      <b>Topic :</b>
                      {quiz.topic}
                    </p>
                    <p>
                      <b>Question :</b>
                      {quiz.question}
                    </p>
                    <p>
                      <b>Correct Answer :</b>
                      {quiz.correct_answer}
                    </p>
                  </div>
                  <div className="quiz-ans">
                    {quiz.length !== 0 ? (
                      quiz.answers.map((ans, i) => {
                        return (
                          <div className="ans d-flex gap-2 flex-row" key={i}>
                            <button className="ans-btn btn btn-light btn-sm">
                              {ans}
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p>No answers found</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

Viewquiz.prototypes = {
  getAllQuiz: Proptypes.func.isRequired,
  allQuiz: Proptypes.array.isRequired,
  deleteQuiz: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allQuiz: state.combinedReducerQuiz.items,
});

export default connect(mapStateToProps, { getAllQuiz, deleteQuiz })(Viewquiz);
