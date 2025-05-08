import { useEffect } from "react";
import { useTheme } from "../../../providers/Theme";
import "./WindowX.css";

interface Props {
    onClick: () => void;
}

export const WindowX = (props: Props) => {
    const { theme, applyTheme } = useTheme();
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const boxSize = "24";
    const startPixelBox = "5";
    const length = "14";
    const roundValue = "4";

    const startPixelLine = "8";
    const endPixelLine = "16";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={boxSize}
            height={boxSize}
            className="window-x"
            onClick={() => props.onClick()}
        >
            <rect
                x={startPixelBox}
                y={startPixelBox}
                rx={roundValue}
                ry={roundValue}
                width={length}
                height={length}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <line
                x1={startPixelLine}
                y1={startPixelLine}
                x2={endPixelLine}
                y2={endPixelLine}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1={startPixelLine}
                y1={endPixelLine}
                x2={endPixelLine}
                y2={startPixelLine}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};
