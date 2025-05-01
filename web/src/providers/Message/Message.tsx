import { useContext, useEffect } from "react";
import { ThemeContext } from "../Theme";

interface Props {
    message: string | null;
    accept: boolean;
    onAccept?: () => void;
    onReject?: () => void;
}

const Message = (props: Props) => {
    if (!!props.message) return null;

    const { theme, applyTheme } = useContext(ThemeContext);
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return <div>Message</div>;
};

export default Message;
