interface Props {
    color: string;
}

export const PlusCircle = (props: Props) => {
    return (
        <>
            <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </>
    );
};
