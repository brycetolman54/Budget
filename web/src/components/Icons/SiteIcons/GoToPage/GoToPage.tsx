import { Icon } from "../../Icon";

export const GoToPage = () => {
    const width = "28";
    const height = "20";
    const strokeWidth = "1";
    const rx = "2";
    const div = String(+width / 7);
    const opacity = "0.8";

    const firstX = "0";
    const firstY1 = "2";
    const firstLength = String(+div * 5);
    const firstHeight = String(+height - +firstY1 * 2);
    const firstY2 = String(+firstY1 + 4);

    const circX = String(+div * 2.5);
    const diffYs = String(+firstHeight - +firstY2);
    const circY = String(+diffYs / 2 + +firstY2 + 1);
    const circRad = String(+diffYs / 2 - 2);

    const halfHeight = String(+height / 2);
    const endpoint = String(+width - 2);
    const midpointX = String(+div * 5.5);

    const headX1 = String(+endpoint - 2);
    const headX2 = String(+endpoint + 0.5);
    const headStart = String(+halfHeight - 1);
    const headY2 = String(+halfHeight + 1.5);

    return (
        <Icon
            Size={{
                width: width,
                height: height,
                viewWidth: width,
                viewHeight: height,
            }}
            className="go-to-page"
        >
            <rect
                x={firstX}
                y={firstY1}
                width={firstLength}
                height={firstHeight}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                rx={rx}
                opacity={opacity}
            />
            <line
                x1={firstX}
                x2={String(+firstLength + +firstX)}
                y1={firstY2}
                y2={firstY2}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                opacity={opacity}
            />
            <circle
                cx={circX}
                cy={circY}
                r={circRad}
                stroke="currentColor"
                fill="none"
                strokeDasharray="2,1"
                opacity={opacity}
            />
            <path
                d={`M${circX} ${circY} Q ${midpointX} 18 ${endpoint} ${halfHeight}`}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d={`M${headX1} ${headStart} H ${headX2} V ${headY2}`}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                transform={`rotate(-25, ${endpoint}, ${halfHeight}) translate(0.3, 0)`}
            />
        </Icon>
    );
};
