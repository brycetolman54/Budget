type Size = {
    width: string;
    height: string;
    viewWidth: string;
    viewHeight: string;
};
interface Props {
    size?: string;
    Size?: Size;
    className: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Icon = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={
                "0 0 " + props.size ||
                props.Size!.viewWidth + " " + props.size ||
                props.Size!.viewHeight
            }
            width={props.size || props.Size!.width}
            height={props.size || props.Size!.height}
            className={props.className}
            onClick={() => props.onClick?.()}
        >
            {props.children}
        </svg>
    );
};
