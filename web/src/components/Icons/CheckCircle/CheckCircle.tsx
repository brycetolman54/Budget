import "./CheckCircle.css";

export const CheckCircle = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="check-circle"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <line
                x1="7"
                y1="12"
                x2="11"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="11"
                y1="17"
                x2="17"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};
