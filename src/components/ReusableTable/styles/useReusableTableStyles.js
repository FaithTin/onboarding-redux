import { makeStyles } from "@mui/styles";
export const useReusableTableStyles = makeStyles((theme) => ({
    root: {},
    content: {
        padding: 0,
    },
    inner: {
        minWidth: 500,
    },
    actions: {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
}));
