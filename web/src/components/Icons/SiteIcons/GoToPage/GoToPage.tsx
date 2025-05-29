import { Icon } from "../../Icon";

export const GoToPage = () => {
    const width = "32";
    const height = "20";

    return (
        <Icon
            Size={{
                width: width,
                height: height,
                viewWidth: width,
                viewHeight: height,
            }}
            className="go-to-page"
        >
            <line
                x1="1"
                x2="8"
                y1="1"
                y2="8"
                stroke="currentColor"
                strokeWidth="1"
            />
        </Icon>
    );
};
