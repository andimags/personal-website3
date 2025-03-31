import Badge from "./Badge";
import List from "./List";
const SkillCard = ({ list, title, skills }) => {
    return (
        <div className="w-full relative flex flex-col rounded-xl bg-zinc-800/50  backdrop-blur-lg border border-zinc-600/60 border-gray-200 bg-clip-border text-white shadow-md hover:scale-105 transition-all scroll-reveal">
            <div className="p-6">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mb-4 h-12 w-12 text-lime-500">
                    <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"></path>
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                </svg> */}
                <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <div className="flex gap-2 flex-wrap">
                    {skills.map((skill) => (
                        <Badge
                            skill={skill}
                        />
                    ))}
                </div>
                {list && <List list={list} />}
            </div>
        </div>
    );
};

export default SkillCard;
