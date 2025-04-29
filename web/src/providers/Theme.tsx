import { Context, createContext, useContext, useState } from "react";

interface Theme {
    primary: string;
    secondary: string;
    tertiary: string;
}

const defaultTheme: Theme = {
    primary: "#0f0",
    secondary: "#fff",
    tertiary: "#f0f0f0",
};

export const ThemeContext: Context<Theme> = createContext<Theme>(defaultTheme);
interface Props {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, _] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
