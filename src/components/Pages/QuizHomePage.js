import React, { Component } from "react";
import "../styles/HomePage.css";

export default class QuizHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.value === "trainer") {
      this.props.history.push("/TrainerHomePage");
    } else if (this.state.value === "student") {
      this.props.history.push("/StudentHomePage");
    } else {
      alert("User Not Exist");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="user-login">
          <form className="login" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>USER ID</label>
            </div>
            <br />
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control xs"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
