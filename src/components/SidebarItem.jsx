import { Link } from "react-router-dom";

const SidebarItem = ({ value, active = false, children, goToId }) => {
    const className = `flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-md transition-all ${
        active
            ? "bg-lime-500/50 backdrop-blur-lg p-1.5 text-white hover:bg-lime-600/50"
            : "hover:bg-zinc-800/50 text-zinc-400"
    }`;

    const handleOnClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: document.querySelector(goToId).offsetTop + 1,
            behavior: "smooth",
        });
    };
    return (
        <Link className={className} onClick={(e) => handleOnClick(e)}>
            {children}

            <small className="text-xs font-medium">{value}</small>
        </Link>
    );
};

export default SidebarItem;
