import { Context, createContext, useContext, useState } from "react";
import Message from "./Message";

interface MessageSet {
    showMessage: (
        message: string,
        accept: boolean,
        acceptText?: string,
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
    const [acceptText, setAcceptText] = useState<string | null>(null);

    const showMessage = (
        message: string,
        accept: boolean,
        acceptText?: string,
        onAccept?: () => void
    ) => {
        setMessage(message);
        setAccept(accept);
        setAcceptText(acceptText || null);
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
                acceptText={acceptText}
                onReject={() => setMessage(null)}
            />
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);

export default MessageProvider;
