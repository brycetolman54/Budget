import { useContext, useEffect } from "react";
import { ThemeContext, useTheme } from "../Theme";
import "./Message.css";

interface Props {
    message: string | null;
    accept: boolean;
    acceptText: string | null;
    rejectText: string | null;
    onReject: () => void;
    onAccept?: () => void;
}

const Message = (props: Props) => {
    if (!props.message) return null;

    const { theme, applyTheme } = useTheme();
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    document.documentElement.style.setProperty(
        "--num-buttons",
        props.accept ? "2" : "1"
    );

    return (
        <>
            <div className="overlay">
                <div className="message-window">
                    <div id="message-text">Message: {props.message}</div>
                    <div className="message-buttons">
                        <button
                            className="message-button"
                            id="reject-button"
                            onClick={() => props.onReject()}
                        >
                            {props.rejectText || "Cancel"}
                        </button>
                        {props.accept && (
                            <button
                                className="message-button"
                                id="accept-button"
                                onClick={() => props.onAccept?.()}
                            >
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
