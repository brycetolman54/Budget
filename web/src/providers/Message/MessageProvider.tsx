import { Context, createContext, useContext, useState } from "react";
import Message from "./Message";

interface MessageSet {
    showMessage: (
        message: string,
        accept: boolean,
        onAccept?: () => void,
        acceptText?: string,
        rejectText?: string
    ) => void;
}

const defaultMessageSet: MessageSet = {
    showMessage: (message: string, accept: boolean) => {},
};

const MessageContext: Context<MessageSet> =
    createContext<MessageSet>(defaultMessageSet);

interface Props {
    children: React.ReactNode;
}

export const MessageProvider: React.FC<Props> = ({ children }) => {
    const [message, setMessage] = useState<string | null>(null);
    const [accept, setAccept] = useState<boolean>(false);
    const [onAccept, setOnAccept] = useState<() => void>(() => {});
    const [acceptText, setAcceptText] = useState<string | null>(null);
    const [rejectText, setRejectText] = useState<string | null>(null);

    const showMessage = (
        message: string,
        accept: boolean,
        onAccept?: () => void,
        acceptText?: string,
        rejectText?: string
    ) => {
        setMessage(message);
        setAccept(accept);
        setOnAccept(() => () => {
            if (onAccept) {
                onAccept();
            }
            setMessage(null);
        });
        setAcceptText(acceptText || null);
        setRejectText(rejectText || null);
    };

    return (
        <MessageContext.Provider value={{ showMessage: showMessage }}>
            {children}
            <Message
                message={message}
                accept={accept}
                onAccept={onAccept}
                acceptText={acceptText}
                rejectText={rejectText}
                onReject={() => setMessage(null)}
            />
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);
