import { GET_CONTACT_LIST,ADD_NEW_CONTACT,CLEAN_ALERTS,UPDATE_CONTACT_DETAILS,
    DELETE_CONTACTS,CLEAN_CONTACT_DETAILS,CLEAN_CONTACT,SET_CONTACT_DETAILS,ALERT_ERROR } from "../action-types";
import { fetchData } from "../../api";
import { reset } from "redux-form";


export const getContactList = () => async (dispatch) => {
    try {
        const res = await fetchData.get("http://malih-auth.ap-southeast-2.elasticbeanstalk.com/api/v1/getAllUploadedEmails/listId/480");
        const contacts = res.data;
        contacts.reverse();
        dispatch({
            type: GET_CONTACT_LIST,
            payload: {
                data: contacts,
                message: "SUCCESS:",
            },
        });
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: "ERROR:",
        });
    }
};


export const addNewContact = (formValues) => async (dispatch) => {
   
    dispatch(reset("contactForm"));
    try {
        await fetchData.post("/emailUpload", [
            {
                ...formValues,
                listId: 480,
            },
        ]);
        const res = await fetchData.get("https://cors-anywhere.herokuapp.com/http://malih-auth.ap-southeast-2.elasticbeanstalk.com/api/v1/emailUpload");
        dispatch({
            type: ADD_NEW_CONTACT,
            payload: {
                data: res.data[res.data.length - 1],
                message: "SUCCESS: Successfully add new contact",
            },
        });
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: "ERROR: Unable to add contact",
        });
    }
};


export const updateContactDetails = (formValues) => async (dispatch) => {
    try {
        await fetchData.put("/updateEmail", formValues);
        dispatch({
            type: UPDATE_CONTACT_DETAILS,
            payload: {
                data: formValues,
                message: `SUCCESS: Successfully update contact with ID:${formValues.id}`,
            },
        });
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: `ERROR: Unable to update contact with ID: ${formValues.id}`,
        });
    }
};


export const deleteContacts = (contactIds) => async (dispatch) => {
    try {
        await fetchData.delete("/deleteEmails", {
            data: contactIds,
        });
        dispatch({
            type: DELETE_CONTACTS,
            payload: {
                data: contactIds,
                message: `SUCCESS: Successfully deleted ${contactIds.length} contacts`,
            },
        });
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: `ERROR: Unable to delete ${contactIds.length} contacts`,
        });
    }
};

export const setContactDetails = (contact) => (dispatch) =>
    dispatch({ type: SET_CONTACT_DETAILS, payload: contact });

export const cleanContactDetails = () => (dispatch) =>
    dispatch({ type: CLEAN_CONTACT_DETAILS });

export const cleanContact = () => (dispatch) =>
    dispatch({ type: CLEAN_CONTACT });

export const cleanAlerts = () => (dispatch) => dispatch({ type: CLEAN_ALERTS });
