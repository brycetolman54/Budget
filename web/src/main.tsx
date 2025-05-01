import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./providers/Theme.tsx";
import UserProvider from "./providers/User.tsx";
import MessageProvider from "./providers/Message/MessageProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <UserProvider>
            <ThemeProvider>
                <MessageProvider>
                    <App />
                </MessageProvider>
            </ThemeProvider>
        </UserProvider>
    </StrictMode>
);
