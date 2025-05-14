import { StatusIcon } from "../StatusIcon";
import "./ConcentricCircle.css";

export const ConcentricCircle = () => {
    return (
        <StatusIcon class="concentric-circle">
            <circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
        </StatusIcon>
    );
};
