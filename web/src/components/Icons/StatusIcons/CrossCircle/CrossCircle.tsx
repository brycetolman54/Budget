import { StatusIcon } from "../StatusIcon";
import "./CrossCircle.css";

export const CrossCircle = () => {
    return (
        <StatusIcon class="cross-circle">
            <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </StatusIcon>
    );
};
