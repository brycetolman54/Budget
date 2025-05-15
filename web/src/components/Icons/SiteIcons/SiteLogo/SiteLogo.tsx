import "./SiteLogo.css";

interface Props {
    size: string;
    color?: string;
}

export const SiteLogo = (props: Props) => {
    const center = String(+props.size / 2);
    const radius = String(+center - 2);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={"0 0 " + props.size + " " + props.size}
            width={props.size}
            height={props.size}
            className="site-logo"
        >
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={props.color || "currentColor"}
                strokeWidth="2"
            />
        </svg>
    );
};
