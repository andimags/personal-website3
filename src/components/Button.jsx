export const Button = ({ value, className }) => {
    return (
        <button
            className={`bg-zinc-800 font-bold dark:text-white py-2 px-4 rounded-md dark:hover:text-white dark:hover:bg-transparent transition-all shadow-md  ${className}`}>
            {value}
        </button>
    );
};

export default Button;
