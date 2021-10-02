import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducers from "./categoryReducers";
import courseReducers from "./courseReducers";
import topicReducer from './topicReducer';
import quizReducer from "./quizReducer";

export default combineReducers({
  errors: errorReducer,
  categories: categoryReducers,
  courses: courseReducers,
  topicReducer:topicReducer,
  combinedReducerQuiz:quizReducer,
});
