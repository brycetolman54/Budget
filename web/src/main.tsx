import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./providers/Theme.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <UserProvider> */}
        <ThemeProvider>
            <App />
        </ThemeProvider>
        {/* </UserProvider> */}
    </StrictMode>
);
