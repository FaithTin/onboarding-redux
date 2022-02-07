import { createTheme } from "@mui/material/styles";
import overrides from "./overrides";
const baseTheme = {
    palette: {
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
        },
        success: {
            light: "#81c784",
            main: "#4caf50",
            dark: "#388e3c",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        background: {
            paper: "#fff",
            default: "#fafafa",
        },
    },
    components: { ...overrides },
};

export const theme = createTheme(baseTheme);
