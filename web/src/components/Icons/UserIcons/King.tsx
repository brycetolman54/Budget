interface Props {
    fg_color?: string;
    line_color?: string;
}

export const King = (props: Props) => {
    return (
        <>
            <circle
                cx="16"
                cy="16"
                r="8"
                fill={props.fg_color || "#FFD700"}
                stroke={props.line_color || "#F0F"}
                strokeWidth="1"
            />
        </>
    );
};
