interface Props {
    color: string;
}

export const CrossCircle = (props: Props) => {
    return (
        <>
            <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </>
    );
};
