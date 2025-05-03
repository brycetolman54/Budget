import { useContext, useEffect } from "react";
import { ThemeContext, useTheme } from "../Theme";
import "./Message.css";

interface Props {
    message: string | null;
    accept: boolean;
    acceptText: string | null;
    onReject: () => void;
    onAccept?: () => void;
}

const Message = (props: Props) => {
    if (!props.message) return null;

    const { theme, applyTheme } = useTheme();
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <>
            <div className="overlay">
                <div className="message-window">
                    <div id="message-text">Message: {props.message}</div>
                    <div className="message-buttons">
                        <button onClick={() => props.onReject()}>Cancel</button>
                        {props.accept && (
                            <button onClick={() => props.onAccept?.()}>
                                {props.acceptText || "Accept"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;
