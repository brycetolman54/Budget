interface Props {
    size: string;
    className: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Icon = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={"0 0 " + props.size + " " + props.size}
            width={props.size}
            height={props.size}
            className={props.className}
            onClick={() => props.onClick?.()}
        >
            {props.children}
        </svg>
    );
};
