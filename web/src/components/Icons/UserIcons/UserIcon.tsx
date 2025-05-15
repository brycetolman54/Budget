import { Icon } from "../Icon";
import { King } from "./King";

interface Props {
    icon?: string;
    fg_color?: string;
    line_color?: string;
    bg_color?: string;
    ring_color?: string;
}

export const UserIcon = (props: Props) => {
    return (
        <>
            <Icon size="32" className="user-icon">
                <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill={props.bg_color || "#fff"}
                    stroke={props.ring_color || "#000"}
                    strokeWidth="1"
                />
                {getIcon(props.icon, props.fg_color, props.line_color)}
            </Icon>
        </>
    );
};

const getIcon = (icon?: string, fg_color?: string, line_color?: string) => {
    switch (icon) {
        case "king":
            return <King fg_color={fg_color} line_color={line_color} />;
        default:
            return <>{/*Some default icon*/}</>;
    }
};
