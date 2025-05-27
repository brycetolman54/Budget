import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
    UserProvider,
    LanguageProvider,
    MessageProvider,
    StatusProvider,
    ThemeProvider,
} from "./providers";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <UserProvider>
            <LanguageProvider>
                <ThemeProvider>
                    <MessageProvider>
                        <StatusProvider>
                            <App />
                        </StatusProvider>
                    </MessageProvider>
                </ThemeProvider>
            </LanguageProvider>
        </UserProvider>
    </StrictMode>
);
