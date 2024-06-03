export const ProjectCard = ({ src, title, date, description, url }) => {
    const handleOnClick = (e) => {
        e.preventDefault();
        window.open(url, "_blank");
    };

    return (
        <div
            className="cursor-pointer relative mt-6 flex flex-col rounded-xl bg-zinc-800/50 border border-zinc-600/60  backdrop-blur-lg bg-clip-border text-white shadow-md hover:scale-105 transition-all w-full h-full scroll-reveal"
            onClick={handleOnClick}>
            <div>
                <div className="h-64 overflow-hidden mb-2 rounded-t-lg">
                    <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={src}
                    />
                </div>
                <div className="p-4">
                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block mb-2 font-sans text-zinc-400 font-light leading-relaxed text-inherit antialiased">
                        {date}
                    </p>
                    <p className="block font-sans text-zinc-400 font-light leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                    <a className="text-white inline-flex items-center mt-3">
                        Learn More
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
