import { Context, createContext, useContext, useState } from "react";
import { User, AuthToken } from "shared";

const USER_KEY = "user";
const TOKEN_KEY = "token";

interface UserSet {
    user: User | null;
    token: AuthToken | null;
    setUser: (user: User, token: AuthToken, remember: boolean) => void;
    clearUser: () => void;
}

const defaultUserSet: UserSet = {
    user: null,
    token: null,
    setUser: (user: User, token: AuthToken, remember: boolean) => {},
    clearUser: () => null,
};

const UserContext: Context<UserSet> = createContext<UserSet>(defaultUserSet);

interface Props {
    children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
    const saveToLocalStorage = (user: User, token: AuthToken): void => {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    };

    const retrieveFromLocalStorage = (): {
        user: User | null;
        token: AuthToken | null;
    } => {
        const user = User.fromJson(localStorage.getItem(USER_KEY));
        const token = AuthToken.fromJson(localStorage.getItem(TOKEN_KEY));

        if (!!user && !!token) {
            return { user: user, token: token };
        } else {
            return { user: null, token: null };
        }
    };

    const clearLocalStorage = (): void => {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
    };

    const [userSet, setUserSet] = useState<UserSet>({
        ...defaultUserSet,
        ...retrieveFromLocalStorage(),
    });

    const setUser = (user: User, token: AuthToken, remember: boolean): void => {
        setUserSet({ ...userSet, user: user, token: token });

        if (remember) {
            saveToLocalStorage(user, token);
        }
    };

    const clearUser = (): void => {
        setUserSet({ ...userSet, user: null, token: null });
        clearLocalStorage();
    };

    return (
        <UserContext.Provider
            value={{ ...userSet, setUser: setUser, clearUser: clearUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
