import { Icon } from "../Icon";
import { DefaultLink } from "./DefaultIcon";

interface Props {
    icon: string;
}

export const LinkIcon = (props: Props) => {
    const size = "24";
    return (
        <Icon size={size} className="link-icon">
            {getIcon(props.icon, size)}
        </Icon>
    );
};

const getIcon = (icon: string, size: string) => {
    switch (icon) {
        default:
            return <DefaultLink size={size} />;
    }
};
