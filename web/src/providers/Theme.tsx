import { Context, createContext, useContext, useEffect, useState } from "react";
import { Theme } from "shared";
import { useUser } from "./User";

interface ThemeSet {
    theme: Theme;
    updateTheme: (theme: Theme) => void;
    applyTheme: (theme: Theme) => void;
}

const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F00",
    light: true,
};

const defaultThemeSet: ThemeSet = {
    theme: defaultTheme,
    updateTheme: (theme: Theme) => {},
    applyTheme: (theme: Theme) => {},
};

const ThemeContext: Context<ThemeSet> =
    createContext<ThemeSet>(defaultThemeSet);

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const { user } = useUser();

    const retrieveFromUser = (): Theme => {
        const primary = user?.theme.primary || defaultTheme.primary;
        const secondary = user?.theme.secondary || defaultTheme.secondary;
        const tertiary = user?.theme.tertiary || defaultTheme.tertiary;
        const light = !!user ? user.theme.light : defaultTheme.light;
        return { primary, secondary, tertiary, light };
    };

    const [theme, setTheme] = useState<Theme>(retrieveFromUser());

    const applyTheme = (theme: Theme) => {
        document.documentElement.style.setProperty("--primary", theme.primary);
        document.documentElement.style.setProperty(
            "--secondary",
            theme.secondary
        );
        document.documentElement.style.setProperty(
            "--tertiary",
            theme.tertiary
        );
        document.documentElement.style.setProperty(
            "--background",
            theme.light ? "#fff" : "#000"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            theme.light ? "#000" : "#fff"
        );
    };

    useEffect(() => {
        setTheme(retrieveFromUser());
    }, [user]);

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                updateTheme: setTheme,
                applyTheme: applyTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
