export const TimelineCard = ({ date, title, description }) => {
    return (
        <div className="max-w-lg shadow-lg transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-zinc-800/50  backdrop-blur-lg border border-zinc-600/60 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-zinc-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-zinc-500 absolute -left-10 z-0"></div>

            <div className="flex-auto">
                <h1 className="text-lg">{date}</h1>
                <h1 className="text-xl font-bold">{title}</h1>
                {description && <h3>{description}</h3>}
            </div>
        </div>
    );
};

export default TimelineCard;
