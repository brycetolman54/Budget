interface Props {
    class: string;
    children: React.ReactNode;
}

export const StatusIcon = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={props.class}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            {props.children}
        </svg>
    );
};
