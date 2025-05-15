import { StatusType } from "../../../providers/Status/Status";
import { Icon } from "../Icon";
import { CheckCircle } from "./CheckCircle/CheckCircle";
import { ConcentricCircle } from "./ConcentricCircle/ConcentricCircle";
import { CrossCircle } from "./CrossCircle/CrossCircle";
import { PlusCircle } from "./PlusCircle/PlusCircle";

interface Props {
    statusType: StatusType;
}

export const StatusIcon = (props: Props) => {
    return (
        <Icon className="status-icon" size="24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            {getIcon(props.statusType)}
        </Icon>
    );
};

const getIcon = (statusType: StatusType) => {
    switch (statusType) {
        case StatusType.Success:
            return <CheckCircle />;
        case StatusType.Error:
            return <CrossCircle />;
        case StatusType.Info:
            return <PlusCircle />;
        case StatusType.Other:
            return <ConcentricCircle />;
    }
};
