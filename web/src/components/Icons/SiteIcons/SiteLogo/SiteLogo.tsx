import { Icon } from "../../Icon";
import "./SiteLogo.css";

interface Props {
    size: string;
    color?: string;
}

export const SiteLogo = (props: Props) => {
    const center = String(+props.size / 2);
    const radius = String(+center - 2);

    return (
        <Icon size={props.size} className="site-logo">
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={props.color || "currentColor"}
                strokeWidth="2"
            />
        </Icon>
    );
};
