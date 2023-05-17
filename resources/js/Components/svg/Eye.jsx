const Eye = (props) => (
    <svg width={24} height={24} fill="none" {...props}>
        <path
            stroke="currentColor"
            strokeWidth={1.5}
            d="M19.25 12c0 1-1.75 6.25-7.25 6.25S4.75 13 4.75 12 6.5 5.75 12 5.75 19.25 11 19.25 12Z"
        />
        <circle
            cx={12}
            cy={12}
            r={2.25}
            stroke="currentColor"
            strokeWidth={1.5}
        />
    </svg>
);
export default Eye;
