import {GET_CONTACT_LIST,ADD_NEW_CONTACT,UPDATE_CONTACT_DETAILS,DELETE_CONTACTS,
    CLEAN_CONTACT_DETAILS,CLEAN_CONTACT,SET_CONTACT_DETAILS,CLEAN_ALERTS,
    ALERT_ERROR} from "../action-types";
import produce from "immer";

const initialState = {
    details: null, 
    collections: null, 
    status: "idle", 
    error: null, 
    success: null, 
};


const successAlertFunction = (state, action) => {
    if (state.error) state.error = null;
    state.success = {
        severity: "success", 
        message: action.payload.message, 
        open: true, 
    };
    state.status = "success";
};

const contactReducer = produce((state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            state.collections = action.payload.data;
            successAlertFunction(state, action);
            return state;
        case ADD_NEW_CONTACT:
            state.collections.unshift(action.payload.data);
            successAlertFunction(state, action); 
            return state;
        case UPDATE_CONTACT_DETAILS:
            const targetIndex = state.collections.findIndex(
                (contact) => contact.id === action.payload.data.id
            );
            if (targetIndex > -1) {
                state.collections[targetIndex] = action.payload.data;
                successAlertFunction(state, action); 
            }
            return state;
        case DELETE_CONTACTS:
            state.collections = state.collections.filter(
                (contact) => !action.payload.data.includes(contact.id)
            );
            successAlertFunction(state, action);
            return state;
        case SET_CONTACT_DETAILS:
            state.details = action.payload;
            return state;
        case CLEAN_CONTACT_DETAILS:
            state.details = null;
            return state;
        case CLEAN_CONTACT:
            state = initialState;
            return state;
        case CLEAN_ALERTS:
            state.error = null;
            state.success = null;
            return state;
        case ALERT_ERROR:
            if (state.success) state.success = null;   
            state.error = {
                severity: "error", 
                message: action.payload, 
                open: true, 
            };
            state.status = "error";
            return state;
        default:
            return state; 
    }
});

export default contactReducer;
