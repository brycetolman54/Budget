import { Context, createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./User";
import en from "../languages/en.json";
import es from "../languages/es.json";

type LanguageType = {
    language: string;
    title: string;
    welcome: string;
    login: {
        hello: string;
        bye: string;
    };
};

interface LanguageSet {
    lang: LanguageType;
    updateLanguage: (lang: string) => void;
}

const defaultLanguageSet: LanguageSet = {
    lang: en,
    updateLanguage: (lang: string) => {},
};

const LanguageContext: Context<LanguageSet> =
    createContext<LanguageSet>(defaultLanguageSet);

interface Props {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
    const { user } = useUser();

    const getLanguage = (lang: string) => {
        switch (lang) {
            case "en":
                return en;
            case "es":
                return es;
            case "fr":
                return en; // Fallback to English if French is not available
            case "de":
                return en; // Fallback to English if German is not available
            case "it":
                return en; // Fallback to English if Italian is not available
            default:
                return en;
        }
    };

    const retrieveFromUser = (): LanguageType => {
        const lang = user?.language || navigator.language.split("-")[0];
        return getLanguage(lang);
    };

    const [lang, setLang] = useState<LanguageType>(retrieveFromUser());

    useEffect(() => {
        setLang(retrieveFromUser());
    }, [user]);

    const updateLanguage = (lang: string) => {
        setLang(getLanguage(lang));
    };

    return (
        <LanguageContext.Provider
            value={{
                lang: lang,
                updateLanguage: updateLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
