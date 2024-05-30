export const ProjectCard = () => {
    return (
        <div class="relative mt-6 flex w-96 flex-col rounded-xl bg-zinc-800 bg-clip-border text-white shadow-md hover:scale-105 transition-all">
            <div>
                <div class="h-64 overflow-hidden mb-2 rounded-t-lg">
                    <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src="https://dummyimage.com/1204x504"
                    />
                </div>
                <div className="p-4">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        UI/UX Review Check
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facere velit enim illo repellendus odit? Eaque
                        aperiam voluptates iure magnam nemo? Possimus sint
                        officiis tenetur soluta et, nobis tempore nisi nemo!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
