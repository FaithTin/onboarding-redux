import { colors } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const usePaginateStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        display: "flex",
        alignItems: "center",
    },
    active: {},
    activeLink: {},
    break: {},
    breakLink: {},
    disabled: {},
    next: {
        marginLeft: theme.spacing(1),
    },
    nextLink: {
        padding: "8px 18px",
        outline: "none",
        cursor: "pointer",
        borderRadius: 4,
        "&:hover": {
            backgroundColor:
                theme.palette.type === "dark" ? "#595959" : colors.blueGrey[50],
        },
    },
    page: {},
    pageLink: {
        color: theme.palette.text.primary,
        padding: theme.spacing(1),
        outline: "none",
        cursor: "pointer",
        width: 50,
        height: 50,
        borderRadius: "50%",
        display: "block",
        textAlign: "center",
        "&:hover": {
            backgroundColor:
                theme.palette.type === "dark" ? "#595959" : colors.blueGrey[50],
            color: theme.palette.text.primary,
        },
        "&$activeLink": {
            backgroundColor:
                theme.palette.type === "dark" ? "#595959" : colors.blueGrey[50],
            color: theme.palette.text.primary,
        },
    },
    previous: {
        marginRight: theme.spacing(1),
    },
    previousLink: {
        padding: "6px 16px",
        outline: "none",
        cursor: "pointer",
        borderRadius: 4,
        "&:hover": {
            backgroundColor:
                theme.palette.type === "dark" ? "#595959" : colors.blueGrey[50],
        },
    },
}));
