import { StatusType } from "../../../providers/Status/Status";
import { Icon } from "../Icon";
import { CheckCircle } from "./CheckCircle";
import { ConcentricCircle } from "./ConcentricCircle";
import { CrossCircle } from "./CrossCircle";
import { PlusCircle } from "./PlusCircle";

interface Props {
    statusType: StatusType;
}

export const StatusIcon = (props: Props) => {
    const color = getColor(props.statusType);

    return (
        <Icon className="status-icon" size="24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke={color}
                strokeWidth="2"
            />
            {getIcon(props.statusType, color)}
        </Icon>
    );
};

const getIcon = (statusType: StatusType, color: string) => {
    switch (statusType) {
        case StatusType.Success:
            return <CheckCircle color={color} />;
        case StatusType.Error:
            return <CrossCircle color={color} />;
        case StatusType.Info:
            return <PlusCircle color={color} />;
        case StatusType.Other:
            return <ConcentricCircle color={color} />;
    }
};

const getColor = (statusType: StatusType): string => {
    switch (statusType) {
        case StatusType.Success:
            return "green";
        case StatusType.Error:
            return "red";
        case StatusType.Info:
            return "rgb(167, 5, 167)";
        case StatusType.Other:
            return "var(--primary)";
    }
};
