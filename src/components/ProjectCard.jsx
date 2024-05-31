export const ProjectCard = () => {
    return (
        <div className="cursor-pointer relative mt-6 flex w-96 flex-col rounded-xl bg-zinc-800/50 border border-zinc-600/60  backdrop-blur-lg bg-clip-border text-white shadow-md hover:scale-105 transition-all w-full">
            <div>
                <div className="h-64 overflow-hidden mb-2 rounded-t-lg">
                    <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src="https://picsum.photos/1000/1000"
                    />
                </div>
                <div className="p-4">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        UI/UX Review Check
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facere velit enim illo repellendus odit? Eaque
                        aperiam voluptates iure magnam nemo? Possimus sint
                        officiis tenetur soluta et, nobis tempore nisi nemo!
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
