interface Props {
    color: string;
}

export const CheckCircle = (props: Props) => {
    return (
        <>
            <line
                x1="7"
                y1="12"
                x2="11"
                y2="17"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="11"
                y1="17"
                x2="17"
                y2="8"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </>
    );
};
