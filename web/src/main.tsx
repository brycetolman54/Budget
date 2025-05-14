import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./providers/Theme.tsx";
import UserProvider from "./providers/User.tsx";
import MessageProvider from "./providers/Message/MessageProvider.tsx";
import StatusProvider from "./providers/Status/StatusProvider.tsx";
import LanguageProvider from "./providers/Language.tsx";

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
