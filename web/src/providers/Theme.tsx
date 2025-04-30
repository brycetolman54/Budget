import { Context, createContext, useContext, useState } from "react";
import { defaultTheme, Theme } from "shared";
import { useUser } from "./User";

interface ThemeSet {
    theme: Theme;
    updateTheme: (theme: Theme) => void;
    applyTheme: (theme: Theme) => void;
}

const defaultThemeSet: ThemeSet = {
    theme: defaultTheme,
    updateTheme: (theme: Theme) => {
        if (!!theme) {
        }
    },
    applyTheme: (theme: Theme) => {
        if (!!theme) {
        }
    },
};

export const ThemeContext: Context<ThemeSet> =
    createContext<ThemeSet>(defaultThemeSet);

interface Props {
    children: React.ReactNode;
}

const { user } = useUser();

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const retrieveFromUser = (): Theme => {
        const primary = user?.theme.primary || defaultTheme.primary;
        const secondary = user?.theme.secondary || defaultTheme.secondary;
        const tertiary = user?.theme.tertiary || defaultTheme.tertiary;
        return { primary, secondary, tertiary };
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
    };

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

export default ThemeProvider;
