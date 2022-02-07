import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThreeDots } from "react-loader-spinner";

const useStyles = makeStyles(() => ({
    root: {
        height: "calc(100vh - 40px)",
    },
    content: { marginTop: "25%" },
    
}));
const LoadingCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <ThreeDots align="center" color="#003366" height="100" width="100"/>
            </CardContent>
            <CardContent className={classes.textContainer}>
                <Typography variant="subtitle">Loading...</Typography>
            </CardContent>
        </Card>
    );
};

export default LoadingCard;
