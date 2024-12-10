import "./App.css";
import ThemeProvider from "./providers/themeProvider";
import Router from "./routes/router";

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
