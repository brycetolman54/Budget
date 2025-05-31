interface Props {
    size: string;
}

export const DefaultLink = (props: Props) => {
    const first = "2";
    const firstLength = String(+props.size - +first * 2);

    const second = "4.5";
    const secondLength = String(+props.size - +second * 2);

    const third = "6.5";
    const thirdLength = String(+props.size - +third * 2);

    const fourth = "7.5";
    const fourthLength = String(+props.size - +fourth * 2);

    const fifth = "8.5";
    const fifthLength = String(+props.size - +fifth * 2);

    const sixth = "9.5";
    const sixthLength = String(+props.size - +sixth * 2);

    const seventh = "11";
    const seventhLength = String(+props.size - +seventh * 2);

    const strokeWidth = "1";
    const rx = "2";
    const midpoint = String(+props.size / 2);

    return (
        <>
            <rect
                x={first}
                y={first}
                width={firstLength}
                height={firstLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                rx={rx}
            />
            <rect
                x={second}
                y={second}
                width={secondLength}
                height={secondLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                transform={`rotate(45, ${midpoint}, ${midpoint})`}
                rx={rx}
            />
            <rect
                x={third}
                y={third}
                width={thirdLength}
                height={thirdLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                rx={rx}
            />
            <rect
                x={fourth}
                y={fourth}
                width={fourthLength}
                height={fourthLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                transform={`rotate(45, ${midpoint}, ${midpoint})`}
                rx={rx}
            />
            <rect
                x={fifth}
                y={fifth}
                width={fifthLength}
                height={fifthLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                rx={rx}
            />
            <rect
                x={sixth}
                y={sixth}
                width={sixthLength}
                height={sixthLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                transform={`rotate(45, ${midpoint}, ${midpoint})`}
                rx={rx}
            />
            <rect
                x={seventh}
                y={seventh}
                width={seventhLength}
                height={seventhLength}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                rx={rx}
            />
        </>
    );
};
