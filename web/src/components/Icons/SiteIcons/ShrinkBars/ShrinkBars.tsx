import "./ShrinkBars.css";
import { Icon } from "../../Icon";

interface Props {
    onClick?: () => void;
}

export const ShrinkBars = (props: Props) => {
    const size = "32";
    const offset = "8";
    const width = "3";

    const top = String(+offset);
    const bottom = String(+size - +offset);
    const distance = String((+bottom - +top) / 2);
    const middle = String(+offset + +distance);
    const right = String(+offset + +distance * 2);

    const backOffset = String(+top - 1);
    const backTop = String(+offset + 1);
    const backBottom = String(+bottom + 1);
    const backMiddle = String(+middle + 1);
    const backRight = String(+right - 1);

    return (
        <Icon size="32" onClick={props.onClick} className="shrink-bars">
            <line
                x1={backOffset}
                y1={backTop}
                x2={backRight}
                y2={backTop}
                stroke="rgb(65, 65, 65)"
                strokeWidth={width}
                strokeLinecap="round"
            />
            <line
                x1={offset}
                y1={top}
                x2={right}
                y2={top}
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
            />
            <line
                x1={backOffset}
                y1={backMiddle}
                x2={backRight}
                y2={backMiddle}
                stroke="rgb(65, 65, 65)"
                strokeWidth={width}
                strokeLinecap="round"
            />
            <line
                x1={offset}
                y1={middle}
                x2={right}
                y2={middle}
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
            />
            <line
                x1={backOffset}
                y1={backBottom}
                x2={backRight}
                y2={backBottom}
                stroke="rgb(65, 65, 65)"
                strokeWidth={width}
                strokeLinecap="round"
            />
            <line
                x1={offset}
                y1={bottom}
                x2={right}
                y2={bottom}
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
            />
        </Icon>
    );
};
