const Badge = ({
    value,
    bgColor = "bg-zinc-700",
    borderColor = "border-zinc-600",
}) => {
    const className = `${bgColor} border ${borderColor} shadow-lg px-2 text-sm rounded-full`;
    return <span className={className}>{value}</span>;
};

export default Badge;
