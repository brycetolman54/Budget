import { StatusIcon } from "../StatusIcon";
import "./PlusCircle.css";

export const PlusCircle = () => {
    return (
        <StatusIcon class="plus-circle">
            <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </StatusIcon>
    );
};
