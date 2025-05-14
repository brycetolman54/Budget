import { StatusIcon } from "../StatusIcon";
import "./CheckCircle.css";

export const CheckCircle = () => {
    return (
        <StatusIcon class="check-circle">
            <line
                x1="7"
                y1="12"
                x2="11"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="11"
                y1="17"
                x2="17"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </StatusIcon>
    );
};
