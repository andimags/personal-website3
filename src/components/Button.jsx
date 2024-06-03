export const Button = ({ value, className, url }) => {
    const handleOnClick = () => {
        window.open(url, "_blank");
    };

    return (
        <button
            className={`bg-zinc-800/50  backdrop-blur-lg border border-zinc-600/60 font-bold dark:text-white py-2 px-4 rounded-md dark:hover:text-white dark:hover:bg-transparent transition-all shadow-md  ${className}`}
            onClick={handleOnClick}>
            {value}
        </button>
    );
};

export default Button;
