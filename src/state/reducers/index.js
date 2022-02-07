import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form"; 
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
    form: reduxForm,
    contact: contactReducer, 
     
});

export default rootReducer;
