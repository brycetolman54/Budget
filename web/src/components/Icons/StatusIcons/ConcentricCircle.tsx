interface Props {
    color: string;
}

export const ConcentricCircle = (props: Props) => {
    return (
        <>
            <circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                stroke={props.color}
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill="none"
                stroke={props.color}
                strokeWidth="2"
            />
        </>
    );
};
