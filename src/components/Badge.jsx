const Badge = ({
    skill
}) => {
    const colors = {
        beginner: {
            bgColor: "bg-zinc-700",
            borderColor: "border-zinc-600",
        },
        intermediate: {
            bgColor: "bg-lime-600",
            borderColor: "border-lime-500",
        },
        advanced: {
            bgColor: "bg-lime-800",
            borderColor: "border-lime-700",
        },
    };

    const className = `${colors[skill.level].bgColor} border ${colors[skill.level].borderColor} shadow-lg px-2 text-sm rounded-full`;
    return <span className={className}>{skill.name}</span>;
};

export default Badge;
