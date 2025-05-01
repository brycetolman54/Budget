import { Context, createContext, useContext, useState } from "react";
import Message from "./Message";

interface MessageSet {
    showMessage: (
        message: string,
        accept: boolean,
        onAccept?: () => void
    ) => void;
}

const defaultMessageSet: MessageSet = {
    showMessage: (message: string, accept: boolean) => {},
};

export const MessageContext: Context<MessageSet> =
    createContext<MessageSet>(defaultMessageSet);

interface Props {
    children: React.ReactNode;
}

const MessageProvider: React.FC<Props> = ({ children }) => {
    const [message, setMessage] = useState<string | null>(null);
    const [accept, setAccept] = useState<boolean>(false);
    const [onAccept, setOnAccept] = useState<() => void>(() => {});

    const showMessage = (
        message: string,
        accept: boolean,
        onAccept?: () => void
    ) => {
        setMessage(message);
        setAccept(accept);
        setOnAccept(() => () => {
            if (onAccept) {
                onAccept();
            }
            setMessage(null);
        });
    };

    return (
        <MessageContext.Provider value={{ showMessage: showMessage }}>
            {children}
            <Message
                message={message}
                accept={accept}
                onAccept={onAccept}
                onReject={() => setMessage(null)}
            />
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);

export default MessageProvider;
