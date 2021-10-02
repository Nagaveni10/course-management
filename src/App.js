import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";

import CourseDashboard from "./components/CourseDashboard";
import Dashboard from "./components/Dashboard";
import CreateCategory from "./components/CreateCategory";
import Navbar from "./components/Navigation/Navbar";

import { Route, BrowserRouter as Router } from "react-router-dom";
import EditCategory from "./components/EditCategory";
import UpdateCourse from "./components/UpdateCourse";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CreateCourse from "./components/CreateCourse";
import CreateTopic from "./components/topicComponent/CreateTopic";
import UpdateTopic from "./components/topicComponent/UpdateTopic";
import TopicList from "./components/topicComponent/TopicList";

import CreateQuiz from "./components/Trainer/CreateQuiz";
import TrainerHomePage from "./components/Trainer/TrainerHomePage";
import Viewquiz from "./components/Trainer/Viewquiz";
import Quiz1 from "./components/Student/Quiz1";
import StudentHomePage from "./components/Student/StudentHomePage";
import QuizList from "./components/Student/QuizList";
import UpdateQuestion from "./components/Trainer/UpdateQuestion";
import Quiz2 from "./components/Student/Quiz2";
import QuizHomePage from "./components/Pages/QuizHomePage";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Router>
            <Navbar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addcategory" component={CreateCategory} />
            <Route exact path="/editcategory/:id" component={EditCategory} />
            <Route exact path="/courses" component={CourseDashboard} />
            <Route exact path="/createCourse" component={CreateCourse} />
            <Route exact path="/updateCourse/:id" component={UpdateCourse} />
            <Route exact path="/createtopic/:name" component={CreateTopic} />
            <Route exact path="/topiclist" component={TopicList} />
            <Route exact path="/updatetopic/:id" component={UpdateTopic} />
            {/* Start Quiz Module */}
            <Route exact path="/QuizHomePage" component={QuizHomePage} />
            <Route exact path="/QuizHomePage" component={QuizHomePage} />
            <Route exact path="/TrainerHomePage" component={TrainerHomePage} />
            <Route exact path="/CreateQuiz" component={CreateQuiz} />
            <Route exact path="/Viewquiz" component={Viewquiz} />
            <Route exact path="/StudentHomePage" component={StudentHomePage} />
            <Route exact path="/QuizList" component={QuizList} />
            <Route
              exact
              path="/UpdateQuestion/:id"
              component={UpdateQuestion}
            />
            <Route exact path="/Quiz1" component={Quiz1} />
            <Route exact path="/Quiz2" component={Quiz2} />
            {/* end */}
          </Router>
        </div>
      </Provider>
      <ToastContainer
        autoClose={1500}
        position="top-right"
        hideProgressBar
        theme="light"
      />
    </>
  );
}

export default App;
