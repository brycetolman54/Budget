import { StatusType } from "./Status";

interface Props {
    type: StatusType;
    text: string;
    title: string;
    onClose: () => void;
}

export const Status = (props: Props) => {
    return <div>Status</div>;
};
