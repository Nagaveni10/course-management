import React, { Component } from "react";
import "../styles/Quiz.css";
import { getAllQuiz } from "../../actions/quizActions";
import { connect } from "react-redux";
import Proptypes from "prop-types";

class Quiz2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz2: [],
      count: 10,
      isButtonSelected: true,
      correctAnswers: [],
    };
    this.makeTimer();
  }

  handleClick = (event) => {
    let correctAns = this.state.quiz2.filter((correct_ans) => {
      return correct_ans.correct_answer === event.target.value;
    });
    correctAns.map((ans) => (
      this.state.correctAnswers.includes(ans.correct_answer)
        ? console.log("$")
        : this.state.correctAnswers.push(ans.correct_answer)
    ));
  }

  async componentDidMount() {
    await this.props.getAllQuiz();
    let filteredquiz = this.props.allQuiz.filter((quiz) => {
      return quiz.quiz_name === "2";
    });
    this.setState({ quiz2: filteredquiz });
  }
  makeTimer() {
    var time = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
      if (this.state.count === 0) {
        clearInterval(time);
        alert(
          `Number of correct answers : ${this.state.correctAnswers.length}`
        );
        this.props.history.push("/StudentHomePage");
      }
    }, 1000);
  }

  handleFinish() {
    clearInterval();
    alert(
      `Number of correct answers : ${this.state.correctAnswers.length}`
    );
    this.props.history.push("/QuizList");
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="counter">Timer : {this.state.count}</h3>
        <div className="quiz-card">
          {this.state.quiz2.map((quiz) => {
            return (
              <div className="card" key={quiz.id}>
                <h5 className="card-title">{quiz.question}</h5>
                {quiz.answers.map((ans) => {
                  return (
                    <div className="radio-inp" onChange={this.handleClick.bind(this)}>
                      <input type="radio" className="form-check-input" value={ans} name={quiz.id} />   {ans}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <button className="btn btn-warning" onClick={this.handleFinish.bind(this)}>Finish Quiz</button>

        </div>
      </React.Fragment>
    );
  }
}

Quiz2.prototypes = {
  getAllQuiz: Proptypes.func.isRequired,
  allQuiz: Proptypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  allQuiz: state.combinedReducerQuiz.items,
});

export default connect(mapStateToProps, { getAllQuiz })(Quiz2);