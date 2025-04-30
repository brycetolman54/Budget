import { Context, createContext, useContext, useState } from "react";
import { Theme } from "shared";

const PRIMARY_KEY = "primary_theme";
const SECONDARY_KEY = "secondary_theme";
const TERTIARY_KEY = "tertiary_theme";

interface ThemeSet {
    currentTheme: Theme;
    updateTheme: (theme: Theme) => void;
}

const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#000000",
};

const defaultThemeSet: ThemeSet = {
    currentTheme: defaultTheme,
    updateTheme: (theme: Theme) => {},
};

export const ThemeContext: Context<ThemeSet> =
    createContext<ThemeSet>(defaultThemeSet);

interface Props {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const saveToLocalStorage = (
        primary: string,
        secondary: string,
        tertiary: string
    ): void => {
        localStorage.setItem(PRIMARY_KEY, primary);
        localStorage.setItem(SECONDARY_KEY, secondary);
        localStorage.setItem(TERTIARY_KEY, tertiary);
    };

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const updateTheme = (theme: Theme): void => {
        setTheme(theme);
        saveToLocalStorage(theme.primary, theme.secondary, theme.tertiary);
    };

    return (
        <ThemeContext.Provider
            value={{ currentTheme: theme, updateTheme: updateTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
