import "./ConcentricCircle.css";

export const ConcentricCircle = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="concentric-circle"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};
