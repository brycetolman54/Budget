export interface Theme {
    primary: string;
    secondary: string;
    tertiary: string;
    light: boolean;
}

export const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F00",
    light: true,
};
