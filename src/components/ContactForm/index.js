import React from "react";
import {Dialog,DialogActions,DialogTitle,DialogContent,Button,Grid,Divider} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import WorkOutlineIcon from "@mui/icons-material/Work";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import CustomTextField from "./CustomTextField";
import { useContactFormStyles } from "./styles";

const ContactForm = (props) => {
    const { open, onClose, title } = props;
    const classes = useContactFormStyles();
    const onSubmit = (formValues) => props.onSubmit(formValues);
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form"
        >
            <DialogTitle id="contact-form-title">{title}</DialogTitle>
            <Divider />
            <form onSubmit={onSubmit} autoComplete="off">
                <DialogContent>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} container>
                            <Field
                                name="name"
                                type="text"
                                label="Full Name"
                                required
                                component={CustomTextField}
                                icon={<PersonIcon />}
                            />
                        </Grid>
                        <Grid item xs={12} container>
                            <Field
                                name="email"
                                type="email"
                                label="Email"
                                required
                                component={CustomTextField}
                                icon={<EmailIcon />}
                            />
                        </Grid>
                        <Grid item xs={12} container>
                            <Field
                                name="address"
                                type="text"
                                label="Home Address"
                                component={CustomTextField}
                                icon={<HomeIcon color="action"/>}
                            />
                        </Grid>
                        <Grid item xs={6} container>
                            <Field
                                name="phoneNumber"
                                type="tel"
                                label="Phone Number"
                                component={CustomTextField}
                                icon={<CallIcon />}
                            />
                        </Grid>
                        <Grid item xs={6} container>
                            <Field
                                name="jobTitle"
                                type="text"
                                label="Job Title"
                                component={CustomTextField}
                                icon={<WorkOutlineIcon />}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <div className={classes.actions}>
                        {" "}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={props.handleSubmit(onSubmit)}
                        >
                            Submit
                        </Button>
                    </div>
                </DialogActions>
            </form>
        </Dialog>
    );
};

ContactForm.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

function validate(values) {
    const errors = {};
    const { email, name, phoneNumber } = values;
    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const phoneNumberRegex = new RegExp(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/g
    );

    
    if (!email || !emailRegex.test(email)) {
        errors.email = "A valid email must be provided.";
    }

    
    if (!name) {
        errors.name = "Enter your name.";
    }
    
    if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
        errors.phoneNumber = "Phone number must be provided.";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "contactForm",
})(ContactForm);
